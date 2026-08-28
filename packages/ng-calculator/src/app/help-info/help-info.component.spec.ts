import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HelpInfoComponent } from './help-info.component';

describe('HelpInfoComponent 帮助信息弹窗测试', () => {
  it('正确渲染帮助信息弹窗内容与关闭按钮', async () => {
    // Arrange
    await render(HelpInfoComponent, {
      imports: [MatDialogModule, MatButtonModule],
    });

    // Act & Assert
    expect(screen.getByText('使用指南')).toBeDefined();
    expect(screen.getByText('基本声明')).toBeDefined();
    expect(screen.getByText('关闭')).toBeDefined();
  });
});
