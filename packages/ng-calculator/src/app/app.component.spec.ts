import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { AppComponent } from './app.component';
import { IconRegistryInitService } from './core/icon-registry-init.service';

describe('AppComponent 根组件测试', () => {
  const mockHttp = {
    get: vi.fn(() => of([])),
  };

  const mockIconRegistry = {
    init: vi.fn(),
  };

  it('应用正确启动并渲染导航栏与计算器主体', async () => {
    // Arrange & Act
    await render(AppComponent, {
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
    expect(screen.getByText('Calculator')).toBeDefined();
    expect(mockIconRegistry.init).toHaveBeenCalledTimes(1);
  });
});
