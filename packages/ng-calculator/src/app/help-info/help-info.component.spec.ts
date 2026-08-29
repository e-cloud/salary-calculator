import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { signal } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { HelpInfoComponent } from './help-info.component';
import { SalaryCalculatorStore } from '../calculator/salary-calculator.store';

describe('HelpInfoComponent 帮助信息弹窗测试', () => {
  const mockRecipeIndex = [
    { id: 0, label: '一档(企业)', city: '深圳', file: 'shenzhen-1.json' },
    { id: 1, label: '标准(企业)', city: '北京', file: 'beijing.json' },
    { id: 3, label: '标准(企业)', city: '上海', file: 'shanghai.json' },
    { id: 4, label: '标准(企业)', city: '广州', file: 'guangzhou.json' },
  ];

  const mockStore = {
    recipeIndex: signal(mockRecipeIndex),
  };

  it('正确渲染使用指南内容、动态城市标签与关闭按钮', async () => {
    // Arrange
    await render(HelpInfoComponent, {
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatChipsModule,
        MatIconModule,
      ],
      providers: [{ provide: SalaryCalculatorStore, useValue: mockStore }],
    });

    // Act & Assert
    expect(screen.getByTestId('help-dialog-title')).toBeDefined();
    expect(screen.getByTestId('help-dialog-content')).toBeDefined();
    expect(screen.getByTestId('help-dialog-close-btn')).toBeDefined();

    // 验证动态城市列表渲染
    expect(screen.getByText('深圳')).toBeDefined();
    expect(screen.getByText('北京')).toBeDefined();
    expect(screen.getByText('上海')).toBeDefined();
    expect(screen.getByText('广州')).toBeDefined();

    // 验证反馈与联系作者
    expect(screen.getByText('反馈与联系作者')).toBeDefined();
    expect(screen.getByText('联系作者')).toBeDefined();
  });
});
