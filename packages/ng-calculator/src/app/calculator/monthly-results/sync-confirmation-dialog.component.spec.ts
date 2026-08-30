import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {
  SyncConfirmationDialogComponent,
  SyncConfirmationData,
} from './sync-confirmation-dialog.component';

describe('SyncConfirmationDialogComponent 同步确认对话框测试', () => {
  const mockDialogRef = {
    close: vi.fn(),
  };

  const mockData: SyncConfirmationData = {
    monthIndex: 2, // 第 3 个月
    changedFields: [
      { fieldPath: 'monthSalary', value: 15000 },
      { fieldPath: 'insuranceBase', value: 12000 },
      { fieldPath: 'housingFundRate', value: 7 },
      { fieldPath: 'supplementaryHousingFundRate', value: 3 },
      { fieldPath: 'supplementaryHousingFundEmployerRate', value: 5 },
    ],
  };

  async function setup(data = mockData) {
    mockDialogRef.close.mockClear();
    return render(SyncConfirmationDialogComponent, {
      imports: [MatDialogModule, MatListModule, MatButtonModule],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: data },
      ],
    });
  }

  it('正确渲染月份信息与待同步字段列表', async () => {
    // Arrange
    await setup();

    // Act & Assert
    // 验证提示文本包含第 3 月
    expect(screen.getByText(/您修改了第3月的数据/i)).toBeDefined();
    // 验证字段中文映射与格式化金额/比例
    expect(screen.getByText('月薪')).toBeDefined();
    expect(screen.getByText(/新值：15000元/i)).toBeDefined();
    expect(screen.getByText('社保基数')).toBeDefined();
    expect(screen.getByText(/新值：12000元/i)).toBeDefined();
    expect(screen.getByText('公积金缴纳比例')).toBeDefined();
    expect(screen.getByText(/新值：7%/i)).toBeDefined();
    expect(screen.getByText('个人补充公积金比例')).toBeDefined();
    expect(screen.getByText(/新值：3%/i)).toBeDefined();
    expect(screen.getByText('企业补充公积金比例')).toBeDefined();
    expect(screen.getByText(/新值：5%/i)).toBeDefined();
  });

  it('用户点击“确认同步”按钮时，dialogRef 应以 true 参数关闭 (符合契约)', async () => {
    // Arrange
    const user = userEvent.setup();
    await setup();
    const confirmButton = screen.getByText('确认同步');

    // Act
    await user.click(confirmButton);

    // Assert
    expect(mockDialogRef.close).toHaveBeenCalledTimes(1);
    expect(mockDialogRef.close).toHaveBeenCalledWith(true);
  });

  it('用户点击“取消”按钮时，dialogRef 应以 false 参数关闭 (符合契约)', async () => {
    // Arrange
    const user = userEvent.setup();
    await setup();
    const cancelButton = screen.getByText('取消');

    // Act
    await user.click(cancelButton);

    // Assert
    expect(mockDialogRef.close).toHaveBeenCalledTimes(1);
    expect(mockDialogRef.close).toHaveBeenCalledWith(false);
  });
});
