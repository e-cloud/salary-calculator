import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MonthPipe } from '../month.pipe';
import {
  SyncConfirmationDialogComponent,
  SyncConfirmationData,
} from './sync-confirmation-dialog.component';

@Component({
  selector: 'app-monthly-results',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatListModule,
    MatDialogModule,
    MonthPipe,
  ],
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
          { optional: true },
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
  @Input() cityRecipe: CityRecipe | null = null;
  @Input() calculationYear!: number;
  @Input() scroll$!: BehaviorSubject<void>;

  @Output() updateMeta = new EventEmitter<{
    meta: MonthlyInputModel;
    index: number;
  }>();
  @Output() changeChartMonth = new EventEmitter<number>();

  detailForms: FormGroup<MonthlyInputForm>[] = [];
  private previousValues: { [key: string]: Record<string, unknown> }[] = [];
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);

  expandedMonths = new Set<number>();

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

  onPanelOpened(index: number) {
    this.expandedMonths.add(index);
    this.onChangeChartMonth(index);
  }

  onPanelClosed(index: number) {
    this.expandedMonths.delete(index);
  }

  getInsuranceTopForMonth(month: number): number {
    if (this.cityRecipe?.policies && this.calculationYear) {
      const policy = findPolicyForMonth(
        this.cityRecipe,
        this.calculationYear,
        month,
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
        month,
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
        month,
      );
      if (policy) {
        return policy.minimumWage;
      }
    }
    return 0;
  }

  onUpdateMeta(value: MonthlyInputModel, index: number) {
    const form = this.detailForms[index];
    const currentValues = form.value;
    const previousValues = this.previousValues[index] || {};

    // 检查哪些字段发生了变化
    const changedFieldPaths = this.getChangedFields(
      currentValues,
      previousValues,
    );

    // 如果有发生变化的字段，且不是最后一个月，先弹出确认对话框
    if (changedFieldPaths.length > 0 && index < this.detailForms.length - 1) {
      const changedFields = changedFieldPaths.map((fieldPath) => ({
        fieldPath,
        value: this.getNestedValue(currentValues, fieldPath),
      }));

      const dialogRef = this.dialog.open(SyncConfirmationDialogComponent, {
        width: '500px',
        data: {
          monthIndex: index,
          changedFields,
        } as SyncConfirmationData,
      });

      dialogRef.afterClosed().subscribe((result) => {
        // 更新当前月份缓存
        this.previousValues[index] = JSON.parse(JSON.stringify(currentValues));

        if (result) {
          // 用户确认同步：同步所有变更字段到后续月份
          for (let i = index + 1; i < this.detailForms.length; i++) {
            const nextForm = this.detailForms[i];
            changedFields.forEach(({ fieldPath, value: changedVal }) => {
              const control = this.getFormControl(nextForm, fieldPath);
              if (control) {
                control.setValue(changedVal, { emitEvent: false });
                if (!this.previousValues[i]) {
                  this.previousValues[i] = {};
                }
                this.setNestedValue(
                  this.previousValues[i],
                  fieldPath,
                  changedVal,
                );
              }
            });
            // 发出后续月份的更新
            this.updateMeta.emit({
              meta: nextForm.value as MonthlyInputModel,
              index: i,
            });
          }
        }

        // 发出当前月份的更新（确保在用户确认或取消之后触发计算）
        this.updateMeta.emit({ meta: value, index });
      });
    } else {
      // 无需同步弹窗（无变更或是最后一个月），直接更新缓存与计算
      this.previousValues[index] = JSON.parse(JSON.stringify(currentValues));
      this.updateMeta.emit({ meta: value, index });
    }
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
            currentPath,
          ),
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
    cityRecipe: CityRecipe | null,
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
        supplementaryHousingFundRate: [
          (meta.supplementaryHousingFundRate || 0) * 100,
          Validators.required,
        ],
        supplementaryHousingFundEmployerRate: [
          (meta.supplementaryHousingFundEmployerRate || 0) * 100,
          Validators.required,
        ],
        extraDeduction: this.fb.group({
          infantCare: [
            meta.extraDeduction.infantCare || 0,
            Validators.required,
          ],
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
          privatePension: [
            meta.extraDeduction.privatePension || 0,
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
