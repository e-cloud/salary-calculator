import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface SyncConfirmationData {
  monthIndex: number;
  changedFields: { fieldPath: string; value: unknown }[];
}

@Component({
  selector: 'app-sync-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>同步确认</h2>
    <mat-dialog-content>
      <p>
        您修改了第{{
          data.monthIndex + 1
        }}月的数据，是否要将以下变更同步到后续月份？
      </p>
      <mat-list>
        <mat-list-item *ngFor="let field of data.changedFields">
          <div matListItemTitle>
            {{ getFieldDisplayName(field.fieldPath) }}
          </div>
          <div matListItemLine>
            新值：{{ formatValue(field.value, field.fieldPath) }}
          </div>
        </mat-list-item>
      </mat-list>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">取消</button>
      <button mat-button color="primary" (click)="onConfirm()">确认同步</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      mat-dialog-content {
        min-width: 300px;
      }
    `,
  ],
})
export class SyncConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SyncConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SyncConfirmationData
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  getFieldDisplayName(fieldName: string): string {
    const fieldNames: { [key: string]: string } = {
      monthSalary: '月薪',
      insuranceBase: '社保基数',
      housingFundBase: '公积金基数',
      housingFundRate: '公积金缴纳比例',
      'insuranceRate.endowment': '养老保险缴纳比例',
      'insuranceRate.health': '医疗保险缴纳比例',
      'insuranceRate.unemployment': '失业保险缴纳比例',
      'extraDeduction.childEducation': '子女教育专项扣除',
      'extraDeduction.continuingEducation': '继续教育专项扣除',
      'extraDeduction.seriousMedicalExpense': '大病医疗专项扣除',
      'extraDeduction.housingLoanInterest': '住房贷款利息专项扣除',
      'extraDeduction.renting': '住房租金专项扣除',
      'extraDeduction.elderlyCare': '赡养老人专项扣除',
      'extraDeduction.enterprisePensionFromEmployee': '企业年金个人缴纳',
      'extraDeduction.enterprisePensionFromEmployer': '企业年金企业缴纳',
      'extraDeduction.other': '其他扣除项',
    };
    return fieldNames[fieldName] || fieldName;
  }

  formatValue(value: unknown, fieldName?: string): string {
    if (typeof value === 'number') {
      if (fieldName && fieldName.includes('Rate')) {
        return `${value}%`;
      }
      return `${value}元`;
    }
    return String(value);
  }
}
