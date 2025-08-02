import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CityRecipe,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta,
  findPolicyForMonth,
} from 'calculator-core';
import {
  autocompleteTemplates,
  monthlyResultsLabelSuffix,
} from '../template-metadata';
import { BehaviorSubject, Observable } from 'rxjs';
import { MonthlyInputForm, MonthlyInputModel } from '../types';
import { MatDialog } from '@angular/material/dialog';
import {
  SyncConfirmationDialogComponent,
  SyncConfirmationData,
} from './sync-confirmation-dialog.component';

@Component({
  selector: 'app-monthly-results',
  templateUrl: './monthly-results.component.html',
  styleUrls: ['./monthly-results.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateX(-20%)' }),
            stagger(100, [
              animate(300, style({ opacity: 1, transform: 'translateX(0)' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class MonthlyResultsComponent implements OnInit {
  readonly templates = autocompleteTemplates;
  readonly labelSuffix = monthlyResultsLabelSuffix;
  @Input() clear!: boolean;
  @Input() monthlyIncomes$!: Observable<MonthlyIncomeInfo[]>;
  @Input() monthlyMetas$!: Observable<MonthlyIncomeMeta[]>;
  @Input() cityRecipe!: CityRecipe;
  @Input() calculationYear!: number;
  @Input() scroll$!: BehaviorSubject<void>;

  @Output() updateMeta = new EventEmitter<{
    meta: MonthlyInputModel;
    index: number;
  }>();
  @Output() changeChartMonth = new EventEmitter<number>();

  detailForms: FormGroup<MonthlyInputForm>[] = [];
  private previousValues: { [key: string]: Record<string, unknown> }[] = [];

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit() {
    this.monthlyMetas$.subscribe((metaList) => {
      if (metaList && metaList.length > 0) {
        this.detailForms = this.buildDetailForms(metaList, this.cityRecipe);
      } else {
        this.detailForms = [];
      }
    });
  }

  trackIncome = (_: number, x: MonthlyIncomeInfo) => x.actualMonth;

  getInsuranceTopForMonth(month: number): number {
    if (this.cityRecipe?.policies && this.calculationYear) {
      const policy = findPolicyForMonth(
        this.cityRecipe,
        this.calculationYear,
        month
      );
      if (policy) {
        return Array.isArray(policy.insuranceBaseRange)
          ? policy.insuranceBaseRange[1]
          : policy.insuranceBaseRange.endowment[1];
      }
    }
    return 0;
  }

  getHousingFundTopForMonth(month: number): number {
    if (this.cityRecipe?.policies && this.calculationYear) {
      const policy = findPolicyForMonth(
        this.cityRecipe,
        this.calculationYear,
        month
      );
      if (policy) {
        return policy.housingFundBaseRange[1];
      }
    }
    return 0;
  }

  getMinimumWageForMonth(month: number): number {
    if (this.cityRecipe?.policies && this.calculationYear) {
      const policy = findPolicyForMonth(
        this.cityRecipe,
        this.calculationYear,
        month
      );
      if (policy) {
        return policy.minimumWage;
      }
    }
    return 0;
  }

  onUpdateMeta(value: MonthlyInputModel, index: number) {
    // 检测变更并询问是否同步到后续月份
    this.detectChangesAndSync(this.detailForms[index], index);

    this.updateMeta.emit({ meta: value, index });
  }

  private detectChangesAndSync(form: FormGroup, monthIndex: number) {
    const currentValues = form.value;
    const previousValues = this.previousValues[monthIndex] || {};

    // 检查哪些字段发生了变化
    const changedFieldPaths = this.getChangedFields(
      currentValues,
      previousValues
    );

    if (
      changedFieldPaths.length > 0 &&
      monthIndex < this.detailForms.length - 1
    ) {
      // 构建包含字段路径和值的对象数组
      const changedFields = changedFieldPaths.map((fieldPath) => ({
        fieldPath,
        value: this.getNestedValue(currentValues, fieldPath),
      }));

      // 如果有变化且不是最后一个月，收集所有变更并一次性询问是否同步
      this.showBatchSyncConfirmation(monthIndex, changedFields);
    }

    // 更新缓存的值
    this.previousValues[monthIndex] = JSON.parse(JSON.stringify(currentValues));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getChangedFields(current: any, previous: any, prefix = ''): string[] {
    const changes: string[] = [];

    for (const key in current) {
      const currentPath = prefix ? `${prefix}.${key}` : key;

      if (
        typeof current[key] === 'object' &&
        current[key] !== null &&
        !Array.isArray(current[key])
      ) {
        // 递归检查嵌套对象
        changes.push(
          ...this.getChangedFields(
            current[key],
            previous[key] || {},
            currentPath
          )
        );
      } else if (current[key] !== previous[key]) {
        // 排除不需要同步的字段
        if (!this.shouldExcludeFromSync(currentPath)) {
          changes.push(currentPath);
        }
      }
    }

    return changes;
  }

  private shouldExcludeFromSync(fieldPath: string): boolean {
    const excludedFields = [
      'monthlyBonus', // 月度奖金通常不同步
      'newPayCycle', // 新计费周期通常不同步
    ];
    return excludedFields.includes(fieldPath);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private setNestedValue(obj: any, path: string, value: unknown): void {
    const keys = path.split('.');
    const lastKey = keys.pop()!;
    const target = keys.reduce((current, key) => {
      if (!current[key]) current[key] = {};
      return current[key];
    }, obj);
    target[lastKey] = value;
  }

  private showBatchSyncConfirmation(
    monthIndex: number,
    changedFields: { fieldPath: string; value: unknown }[]
  ): void {
    const dialogRef = this.dialog.open(SyncConfirmationDialogComponent, {
      width: '500px',
      data: {
        monthIndex,
        changedFields,
      } as SyncConfirmationData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // 同步所有变更字段到后续月份
        changedFields.forEach(({ fieldPath, value }) => {
          this.syncToSubsequentMonths(monthIndex, fieldPath, value);
        });
      }
    });
  }

  private syncToSubsequentMonths(
    fromIndex: number,
    fieldPath: string,
    value: unknown
  ) {
    // 从下一个月开始同步到所有后续月份
    for (let i = fromIndex + 1; i < this.detailForms.length; i++) {
      const form = this.detailForms[i];
      const control = this.getFormControl(form, fieldPath);

      if (control) {
        control.setValue(value, { emitEvent: false });
        // 更新对应的缓存值
        if (!this.previousValues[i]) {
          this.previousValues[i] = {};
        }
        this.setNestedValue(this.previousValues[i], fieldPath, value);

        // 触发表单更新
        const formValue = form.value as MonthlyInputModel;
        this.onUpdateMeta(formValue, i);
      }
    }
  }

  private getFormControl(form: FormGroup, path: string) {
    const keys = path.split('.');
    let control: AbstractControl<unknown> | null = form;

    for (const key of keys) {
      control = control.get(key);
      if (!control) break;
    }

    return control;
  }

  onChangeChartMonth(index: number) {
    this.changeChartMonth.emit(index + 1);
  }

  scrollToChart() {
    this.scroll$.next();
  }

  resetConflict(src: number, form: FormGroup, controlName: string) {
    if (src > 0) {
      form.get(controlName)?.setValue(0);
    }
  }

  private buildDetailForms(
    metaList: MonthlyIncomeMeta[],
    cityRecipe: CityRecipe
  ) {
    const forms = metaList.map((meta, index) => {
      const month = index + 1;
      let policy = null;

      // 为每个月查找其对应的策略
      if (cityRecipe?.policies && this.calculationYear) {
        policy = findPolicyForMonth(cityRecipe, this.calculationYear, month);
      }

      const form = this.fb.group({
        monthSalary: [meta.salary, Validators.required],
        monthlyBonus: [0, Validators.required],
        newPayCycle: [meta.newPayCycle],
        insuranceBase: [meta.insuranceBase, Validators.required],
        lastYearAvgSalary: [meta.lastYearAvgSalary || 0],
        yearBeforeLastAvgSalary: [meta.yearBeforeLastAvgSalary || 0],
        insuranceRate: this.fb.group({
          endowment: [
            (policy?.employee.insuranceRate?.endowment ??
              meta.insuranceRate.endowment) * 100,
            Validators.required,
          ],
          health: [
            (policy?.employee.insuranceRate?.health ??
              meta.insuranceRate.health) * 100,
            Validators.required,
          ],
          unemployment: [
            (policy?.employee.insuranceRate?.unemployment ??
              meta.insuranceRate.unemployment) * 100,
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
      }) as unknown as FormGroup<MonthlyInputForm>;

      // 企业年金个人缴纳部分变更时同步更新企业部分
      form
        .get('extraDeduction.enterprisePensionFromEmployee')
        ?.valueChanges.subscribe((value) => {
          form
            .get('extraDeduction.enterprisePensionFromEmployer')
            ?.setValue(value || 0, { emitEvent: false });
        });

      // 初始化缓存值
      this.previousValues[index] = JSON.parse(JSON.stringify(form.value));

      return form;
    });

    return forms;
  }
}
