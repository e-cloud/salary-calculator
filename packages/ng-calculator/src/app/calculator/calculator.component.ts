/* eslint-disable @typescript-eslint/no-non-null-assertion,@typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import type { EChartsOption } from 'echarts';
import {
  buildBaseMeta,
  buildEmptyMetaList,
  calculateFullYearIncome,
  calculateMonthlyIncomes,
  CityRecipe,
  FullYearIncomeInfo,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta,
  RawMeta,
} from 'calculator-core';
import { mapValues, merge } from 'lodash-es';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import {
  filter,
  map,
  share,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { InputForm, MonthlyInputForm, MonthlyInputModel } from './types';

const shenzhenRecipe: CityRecipe = {
  id: 0,
  label: '非深户一档',
  city: '深圳',
  minimumWage: 2200,
  avgWage: 10646,
  employee: {
    insuranceRate: {
      endowment: 0.08,
      health: 0.02,
      unemployment: 0.003,
    },
  },
  employer: {
    insuranceRate: {
      endowment: 0.14,
      health: 0.052,
      unemployment: 0.007,
      birth: 0.0045,
      occupationalInjury: 0.007,
    },
  },
  insuranceBaseRange: [2200, 20268],
  housingFundBaseRange: [2200, 34860],
  insuranceBaseOnLastMonth: true,
  references: [
    'http://hrss.sz.gov.cn/szsi/sbjxxgk/tzgg/simtgg/content/post_8388699.html',
    'http://gjj.sz.gov.cn/xxgk/zxtzgg/content/post_7827299.html',
  ],
};

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  baseForm: FormGroup<InputForm>;
  detailForms: FormGroup<MonthlyInputForm>[] = [];
  usePredefinedInsurancePercents = true;
  cityRecipe = shenzhenRecipe;
  clear = false;

  baseMeta$ = new BehaviorSubject<MonthlyIncomeMeta>(null as any);
  metaUpdate$ = new Subject<{
    meta: Partial<MonthlyIncomeMeta>;
    index: number;
  }>();
  selectedMonthIndex$ = new BehaviorSubject<number>(0);

  monthlyMetas$: Observable<MonthlyIncomeMeta[]>;
  monthlyIncomes$: Observable<MonthlyIncomeInfo[]>;
  summary$: Observable<FullYearIncomeInfo>;
  recipes$: Observable<CityRecipe[]>;

  // 饼图配置
  deductionChartOption: Observable<EChartsOption>;
  annualDeductionChartOption: Observable<EChartsOption>;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.baseForm = fb.group({
      monthSalary: [10000, Validators.required],
      monthlyBonus: [0, Validators.required],
      annualBonus: [0, Validators.required],
      insuranceBase: [10000, Validators.required],
      housingFundBase: [10000, Validators.required],
      housingFundRate: [5, Validators.required],
      extraDeduction: this.fb.group({
        childEducation: [0, Validators.required],
        continuingEducation: [0, Validators.required],
        seriousMedicalExpense: [0, Validators.required],
        housingLoanInterest: [0, Validators.required],
        renting: [0, Validators.required],
        elderlyCare: [0, Validators.required],
        enterprisePensionFromEmployee: [0, Validators.required],
        enterprisePensionFromEmployer: [0, Validators.required],
        other: [0, Validators.required],
      }),
      insuranceRate: this.fb.group({
        endowment: [
          this.cityRecipe.employee.insuranceRate.endowment * 100,
          Validators.required,
        ],
        health: [
          this.cityRecipe.employee.insuranceRate.health * 100,
          Validators.required,
        ],
        unemployment: [
          this.cityRecipe.employee.insuranceRate.unemployment * 100,
          Validators.required,
        ],
      }),
      insuranceBaseOnLastMonth: [
        this.cityRecipe.insuranceBaseOnLastMonth,
        Validators.required,
      ],
    }) as FormGroup<InputForm>;

    this.monthlyMetas$ = this.baseMeta$.pipe(
      filter((meta) => meta != null),
      map((meta) => buildEmptyMetaList(meta)),
      switchMap((list) => {
        return this.metaUpdate$.pipe(startWith(null)).pipe(
          map((update) => {
            if (update) {
              list[update.index] = merge({}, list[update.index], update.meta);
            }

            // 1 月强制新计费周期
            list[0].newPayCycle = true;
            return list.slice();
          })
        );
      }),
      share()
    );

    this.monthlyIncomes$ = this.monthlyMetas$.pipe(
      filter((list) => list.length > 0),
      map((list) => calculateMonthlyIncomes(list)),
      shareReplay(1)
    );

    this.summary$ = combineLatest([this.monthlyIncomes$, this.baseMeta$]).pipe(
      filter(([_, meta]) => meta != null),
      filter<[MonthlyIncomeInfo[] | null, MonthlyIncomeMeta]>(
        ([list]) => !!list && list.length > 0
      ),
      map(([list, meta]) => {
        return calculateFullYearIncome(list!, meta.annualBonus);
      }),
      shareReplay(1)
    );

    this.annualDeductionChartOption = this.summary$.pipe(
      map((summary) => {
        const data = [
          { value: summary.cashIncomeDeprecated, name: '全年税后' },
          { value: summary.employee.housingFund, name: '全年公积金' },
          { value: summary.fullInsurance, name: '全年社保' },
          { value: summary.totalSeparatedTax, name: '全年个税' },
          {
            value: summary.employee.enterprisePension,
            name: '全年企业年金',
          },
        ];

        return {
          tooltip: {
            trigger: 'item',
            formatter: function (params: any) {
              const currency = new Intl.NumberFormat('zh-CN', {
                style: 'currency',
                currency: 'CNY',
                maximumFractionDigits: 2,
              });
              return `${params.seriesName} <br/>${
                params.name
              }: ${currency.format(params.value)} (${params.percent}%)`;
            },
          },
          legend: {
            orient: 'vertical',
            right: 10,
            data: data.map((item) => item.name),
          },
          series: [
            {
              name: '年薪分配',
              type: 'pie',
              startAngle: -45,
              avoidLabelOverlap: true,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 1,
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 20,
                  fontWeight: 'bold',
                },
              },
              label: {
                padding: 4,
                minMargin: 8,
                formatter: function (params: any) {
                  const currency = new Intl.NumberFormat('zh-CN', {
                    style: 'currency',
                    currency: 'CNY',
                    maximumFractionDigits: 2,
                  });
                  return `${params.name}:\n${currency.format(params.value)} (${
                    params.percent
                  }%)`;
                },
              },
              data: data,
            },
          ],
        } as EChartsOption;
      })
    );

    // 创建月薪扣除饼图数据
    this.deductionChartOption = combineLatest([
      this.monthlyIncomes$,
      this.selectedMonthIndex$.pipe(startWith(0)),
    ]).pipe(
      filter(([incomes, _]) => !!incomes && incomes.length > 0),
      map(([incomes, index]) => {
        // 使用第一个月的数据作为示例
        const firstMonth = incomes[index];

        // 准备饼图数据
        const data = [
          { value: firstMonth.cashIncome, name: '实发工资' },
          { value: firstMonth.housingFund, name: '住房公积金' },
          { value: firstMonth.insuranceCosts.endowment, name: '养老保险' },
          { value: firstMonth.insuranceCosts.health, name: '医疗保险' },
          { value: firstMonth.tax, name: '个人所得税' },
          { value: firstMonth.insuranceCosts.unemployment, name: '失业保险' },
          {
            value: firstMonth.extraDeduction.enterprisePensionFromEmployee,
            name: '企业年金',
          },
        ];

        // 返回ECharts配置
        return {
          tooltip: {
            trigger: 'item',
            formatter: function (params: any) {
              const currency = new Intl.NumberFormat('zh-CN', {
                style: 'currency',
                currency: 'CNY',
                maximumFractionDigits: 2,
              });
              return `${params.seriesName} <br/>${
                params.name
              }: ${currency.format(params.value)} (${params.percent}%)`;
            },
          },
          legend: {
            orient: 'vertical',
            right: 10,
            data: data.map((item) => item.name),
          },
          series: [
            {
              name: '月薪分配',
              type: 'pie',
              //radius: ['40%', '70%'],
              startAngle: -45,
              avoidLabelOverlap: true,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 1,
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 20,
                  fontWeight: 'bold',
                },
              },
              label: {
                padding: 4,
                minMargin: 8,
                formatter: function (params: any) {
                  const currency = new Intl.NumberFormat('zh-CN', {
                    style: 'currency',
                    currency: 'CNY',
                    maximumFractionDigits: 2,
                  });
                  return `${params.name}:\n${currency.format(params.value)} (${
                    params.percent
                  }%)`;
                },
              },
              data: data,
            },
          ],
        } as EChartsOption;
      })
    );

    this.metaUpdate$.subscribe(() => {
      this.baseForm.disable();
    });

    this.monthlyMetas$.subscribe((metaList) => {
      this.detailForms = this.buildDetailForms(metaList, this.cityRecipe);
    });

    this.recipes$ = this.http
      .get<CityRecipe[]>('assets/city-recipes.json')
      .pipe(
        tap((x) => {
          this.changeRecipe(x[0]);
        })
      );

    this.updateFromCache();
  }

  get insuranceTop() {
    return Array.isArray(this.cityRecipe.insuranceBaseRange)
      ? this.cityRecipe.insuranceBaseRange[1]
      : this.cityRecipe.insuranceBaseRange.endowment[1];
  }

  get housingFundTop() {
    return this.cityRecipe.housingFundBaseRange[1];
  }

  changeChartMonth(index: number) {
    this.selectedMonthIndex$.next(index);
  }

  changeRecipe(recipe: CityRecipe) {
    this.cityRecipe = recipe;
    this.patchFromRecipe();
  }

  changePredefineCondition(val: boolean) {
    if (val) {
      this.patchFromRecipe();
    }
  }

  clearResult() {
    this.clear = true;
    this.baseForm.enable();
  }

  reset() {
    this.baseForm.patchValue({
      monthSalary: 10000,
      annualBonus: 0,
      insuranceBase: 10000,
      housingFundBase: 10000,
      housingFundRate: 5,
      extraDeduction: {
        childEducation: 0,
        continuingEducation: 0,
        seriousMedicalExpense: 0,
        housingLoanInterest: 0,
        renting: 0,
        elderlyCare: 0,
        enterprisePensionFromEmployee: 0,
        enterprisePensionFromEmployer: 0,
        other: 0,
      },
      insuranceRate: {
        endowment: this.cityRecipe.employee.insuranceRate.endowment * 100,
        health: this.cityRecipe.employee.insuranceRate.health * 100,
        unemployment: this.cityRecipe.employee.insuranceRate.unemployment * 100,
      },
      insuranceBaseOnLastMonth: this.cityRecipe.insuranceBaseOnLastMonth,
    });
  }

  updateMeta(value: MonthlyInputModel, index: number) {
    this.metaUpdate$.next({
      meta: {
        salary: value.monthSalary + (value.monthlyBonus || 0),
        insuranceBase: value.insuranceBase,
        housingFundBase: value.housingFundBase,
        housingFundRate: value.housingFundRate / 100,
        insuranceRate: mapValues<MonthlyIncomeMeta['insuranceRate'], number>(
          value.insuranceRate,
          (v: number) => v / 100
        ),
        extraDeduction: value.extraDeduction,
        newPayCycle: value.newPayCycle,
        insuranceBaseOnLastMonth: value.insuranceBaseOnLastMonth,
      },
      index,
    });
  }

  calculate(data: RawMeta): void {
    this.saveToCache();

    this.baseMeta$.next(buildBaseMeta(data, this.cityRecipe));

    this.clear = false;
  }

  private patchFromRecipe() {
    this.baseForm.patchValue({
      insuranceRate: {
        endowment: this.cityRecipe.employee.insuranceRate.endowment * 100,
        health: this.cityRecipe.employee.insuranceRate.health * 100,
        unemployment: this.cityRecipe.employee.insuranceRate.unemployment * 100,
      },
      insuranceBaseOnLastMonth: this.cityRecipe.insuranceBaseOnLastMonth,
    });
  }

  private updateFromCache() {
    let cache = JSON.parse(localStorage.getItem('incomeMeta')!);

    if (sessionStorage.getItem('incomeMeta')) {
      cache = JSON.parse(sessionStorage.getItem('incomeMeta')!);
    }

    if (cache) {
      this.baseForm.patchValue(cache);
    }
  }

  private saveToCache() {
    localStorage.setItem('incomeMeta', JSON.stringify(this.baseForm.value));
    sessionStorage.setItem('incomeMeta', JSON.stringify(this.baseForm.value));
  }

  private buildDetailForms(
    metaList: MonthlyIncomeMeta[],
    cityRecipe: CityRecipe
  ) {
    const forms = metaList.map(
      (meta) =>
        this.fb.group({
          monthSalary: [meta.salary, Validators.required],
          monthlyBonus: [0, Validators.required],
          newPayCycle: [meta.newPayCycle],
          insuranceBase: [meta.insuranceBase, Validators.required],
          insuranceRate: this.fb.group({
            endowment: [
              cityRecipe.employee.insuranceRate.endowment * 100,
              Validators.required,
            ],
            health: [
              cityRecipe.employee.insuranceRate.health * 100,
              Validators.required,
            ],
            unemployment: [
              cityRecipe.employee.insuranceRate.unemployment * 100,
              Validators.required,
            ],
          }),
          housingFundBase: [meta.housingFundBase, Validators.required],
          housingFundRate: [meta.housingFundRate * 100, Validators.required],
          extraDeduction: this.fb.group({
            childEducation: [
              meta.extraDeduction.childEducation,
              Validators.required,
            ],
            continuingEducation: [
              meta.extraDeduction.continuingEducation,
              Validators.required,
            ],
            seriousMedicalExpense: [
              meta.extraDeduction.seriousMedicalExpense,
              Validators.required,
            ],
            housingLoanInterest: [
              meta.extraDeduction.housingLoanInterest,
              Validators.required,
            ],
            renting: [meta.extraDeduction.renting, Validators.required],
            elderlyCare: [meta.extraDeduction.elderlyCare, Validators.required],
            enterprisePensionFromEmployee: [
              meta.extraDeduction.enterprisePensionFromEmployee,
              Validators.required,
            ],
            enterprisePensionFromEmployer: [
              meta.extraDeduction.enterprisePensionFromEmployer,
              Validators.required,
            ],
            other: [meta.extraDeduction.other, Validators.required],
          }),
        }) as unknown as FormGroup<MonthlyInputForm>
    );

    return forms;
  }
}
