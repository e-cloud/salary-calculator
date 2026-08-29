import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfferSplitDialogComponent } from './offer-split-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('OfferSplitDialogComponent', () => {
  let component: OfferSplitDialogComponent;
  let fixture: ComponentFixture<OfferSplitDialogComponent>;
  const mockDialogRef = {
    close: vi.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferSplitDialogComponent, NoopAnimationsModule],
      providers: [{ provide: MatDialogRef, useValue: mockDialogRef }],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferSplitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('正确初始化默认表单数据与计算拆分结果', () => {
    expect(component.splitForm.get('totalPackage')?.value).toBe(300000);
    expect(component.splitForm.get('salaryMonths')?.value).toBe(15);
    // 300,000 / 15 = 20,000 元/月，年终奖 = 300000 - 20000*12 = 60,000 元
    expect(component.calculatedMonthSalary).toBe(20000);
    expect(component.calculatedAnnualBonus).toBe(60000);
  });

  it('用户点击应用时，应向 MatDialogRef 传递正确的拆分结果对象', () => {
    component.splitForm.patchValue({
      totalPackage: 480000,
      salaryMonths: 16,
    });
    // 480,000 / 16 = 30,000 元/月，年终奖 = 480000 - 30000*12 = 120,000 元
    expect(component.calculatedMonthSalary).toBe(30000);
    expect(component.calculatedAnnualBonus).toBe(120000);

    component.onApply();
    expect(mockDialogRef.close).toHaveBeenCalledWith({
      totalPackage: 480000,
      monthsCount: 16,
      monthSalary: 30000,
      annualBonus: 120000,
    });
  });

  it('点击关闭按钮时，调用 dialogRef.close()', () => {
    component.onClose();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
