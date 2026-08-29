import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { checkBonusTaxTrap } from 'calculator-core';

export interface OfferSplitResult {
  monthSalary: number;
  annualBonus: number;
  totalPackage: number;
  monthsCount: number;
}

@Component({
  selector: 'app-offer-split-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './offer-split-dialog.component.html',
  styleUrls: ['./offer-split-dialog.component.scss'],
})
export class OfferSplitDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<OfferSplitDialogComponent>);

  readonly salaryMonthsOptions = [
    { value: 12, label: '12 薪 (无固定年终奖)' },
    { value: 13, label: '13 薪 (年底双薪)' },
    { value: 14, label: '14 薪 (2个月年终奖)' },
    { value: 15, label: '15 薪 (3个月年终奖)' },
    { value: 16, label: '16 薪 (4个月年终奖)' },
    { value: 18, label: '18 薪 (6个月年终奖)' },
  ];

  splitForm: FormGroup = this.fb.group({
    totalPackage: [300000, [Validators.required, Validators.min(0)]],
    salaryMonths: [15, Validators.required],
  });

  get calculatedMonthSalary(): number {
    const total = this.splitForm.get('totalPackage')?.value || 0;
    const months = this.splitForm.get('salaryMonths')?.value || 12;
    if (months <= 0) return 0;
    return Math.round(total / months);
  }

  get calculatedAnnualBonus(): number {
    const total = this.splitForm.get('totalPackage')?.value || 0;
    const monthSalary = this.calculatedMonthSalary;
    return Math.max(0, total - monthSalary * 12);
  }

  get trapWarning(): boolean {
    const bonus = this.calculatedAnnualBonus;
    if (bonus <= 0) return false;
    const trap = checkBonusTaxTrap(bonus);
    return trap.isTrap;
  }

  onApply(): void {
    if (this.splitForm.valid) {
      const result: OfferSplitResult = {
        totalPackage: this.splitForm.get('totalPackage')?.value || 0,
        monthsCount: this.splitForm.get('salaryMonths')?.value || 12,
        monthSalary: this.calculatedMonthSalary,
        annualBonus: this.calculatedAnnualBonus,
      };
      this.dialogRef.close(result);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
