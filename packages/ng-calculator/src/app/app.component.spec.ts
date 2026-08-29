/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { AppComponent, STORAGE_KEY_GUIDE_SHOWN } from './app.component';
import { HelpInfoComponent } from './help-info/help-info.component';
import { IconRegistryInitService } from './core/icon-registry-init.service';

describe('AppComponent 根组件测试', () => {
  const mockHttp = {
    get: vi.fn(() => of([])),
  };

  const mockIconRegistry = {
    init: vi.fn(),
  };

  const mockDialogRef = {
    afterClosed: vi.fn(() => of(true)),
  };

  const mockDialog = {
    open: vi.fn(() => mockDialogRef),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockDialogRef.afterClosed.mockReturnValue(of(true));
    mockDialog.open.mockReturnValue(mockDialogRef as any);
    localStorage.clear();
  });

  it('应用正确启动并渲染导航栏与计算器主体', async () => {
    // Arrange & Act
    await render(AppComponent, {
      componentProviders: [{ provide: MatDialog, useValue: mockDialog }],
      providers: [
        provideAnimationsAsync(),
        { provide: HttpClient, useValue: mockHttp },
        { provide: IconRegistryInitService, useValue: mockIconRegistry },
        {
          provide: NGX_ECHARTS_CONFIG,
          useValue: { echarts: () => import('echarts') },
        },
      ],
    });

    // Assert
    expect(screen.getByText('个税与薪资计算器')).toBeDefined();
    expect(mockIconRegistry.init).toHaveBeenCalledTimes(1);
  });

  it('首次访问应用时应自动弹出使用指南并设置 localStorage 标记', async () => {
    // Arrange: 确保无 localStorage 标记
    localStorage.removeItem(STORAGE_KEY_GUIDE_SHOWN);

    // Act
    await render(AppComponent, {
      componentProviders: [{ provide: MatDialog, useValue: mockDialog }],
      providers: [
        provideAnimationsAsync(),
        { provide: HttpClient, useValue: mockHttp },
        { provide: IconRegistryInitService, useValue: mockIconRegistry },
        {
          provide: NGX_ECHARTS_CONFIG,
          useValue: { echarts: () => import('echarts') },
        },
      ],
    });

    // Assert
    expect(mockDialog.open).toHaveBeenCalledWith(
      HelpInfoComponent,
      expect.anything(),
    );
    expect(localStorage.getItem(STORAGE_KEY_GUIDE_SHOWN)).toBe('true');
  });

  it('当 salary_calculator_guide_shown 为 false 时应自动弹出使用指南并重置为 true', async () => {
    // Arrange: 显式设置 storage 值为 'false'
    localStorage.setItem(STORAGE_KEY_GUIDE_SHOWN, 'false');

    // Act
    await render(AppComponent, {
      componentProviders: [{ provide: MatDialog, useValue: mockDialog }],
      providers: [
        provideAnimationsAsync(),
        { provide: HttpClient, useValue: mockHttp },
        { provide: IconRegistryInitService, useValue: mockIconRegistry },
        {
          provide: NGX_ECHARTS_CONFIG,
          useValue: { echarts: () => import('echarts') },
        },
      ],
    });

    // Assert
    expect(mockDialog.open).toHaveBeenCalledWith(
      HelpInfoComponent,
      expect.anything(),
    );
    expect(localStorage.getItem(STORAGE_KEY_GUIDE_SHOWN)).toBe('true');
  });

  it('非首次访问应用（已有标记 true）时不会自动弹出使用指南', async () => {
    // Arrange: 预设已访问标记
    localStorage.setItem(STORAGE_KEY_GUIDE_SHOWN, 'true');

    // Act
    await render(AppComponent, {
      componentProviders: [{ provide: MatDialog, useValue: mockDialog }],
      providers: [
        provideAnimationsAsync(),
        { provide: HttpClient, useValue: mockHttp },
        { provide: IconRegistryInitService, useValue: mockIconRegistry },
        {
          provide: NGX_ECHARTS_CONFIG,
          useValue: { echarts: () => import('echarts') },
        },
      ],
    });

    // Assert
    expect(mockDialog.open).not.toHaveBeenCalled();
  });
});
