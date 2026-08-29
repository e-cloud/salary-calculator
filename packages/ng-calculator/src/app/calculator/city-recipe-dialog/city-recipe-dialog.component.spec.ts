import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CityRecipe, CityRecipeIndexItem } from 'calculator-core';
import {
  CityRecipeDialogComponent,
  CityRecipeDialogData,
} from './city-recipe-dialog.component';

describe('CityRecipeDialogComponent 计算参数与政策依据双Tab弹窗测试', () => {
  const mockDialogRef = {
    close: vi.fn(),
  };

  const mockRecipeIndex: CityRecipeIndexItem[] = [
    { id: 2, label: '标准(企业)', city: '北京', file: 'beijing.json' },
    { id: 3, label: '标准(企业)', city: '上海', file: 'shanghai.json' },
  ];

  const mockBeijingRecipe: CityRecipe = {
    id: 2,
    label: '标准(企业)',
    city: '北京',
    insuranceBaseOnLastMonth: false,
    policies: [
      {
        effectiveDate: '2026-07',
        minimumWage: 2540,
        avgWage: 12116,
        employee: {
          insuranceRate: {
            endowment: 0.08,
            health: 0.02,
            unemployment: 0.005,
          },
        },
        employer: {
          insuranceRate: {
            endowment: 0.16,
            health: 0.098,
            unemployment: 0.005,
            birth: 0.0,
            occupationalInjury: 0.004,
          },
        },
        insuranceBaseRange: {
          endowment: [7270, 36348],
          health: [7270, 36348],
          unemployment: [7270, 36348],
          birth: [7270, 36348],
          occupationalInjury: [7270, 36348],
        },
        housingFundBaseRange: [2540, 36348],
        references: [
          {
            link: 'https://rsj.beijing.gov.cn',
            description:
              '北京市人社局等三部门《关于2026年度各项社会保险缴费工资基数上下限的通告》',
          },
        ],
      },
      {
        effectiveDate: '2025-07',
        minimumWage: 2540,
        avgWage: 11937,
        employee: {
          insuranceRate: {
            endowment: 0.08,
            health: 0.02,
            unemployment: 0.005,
          },
        },
        employer: {
          insuranceRate: {
            endowment: 0.16,
            health: 0.098,
            unemployment: 0.005,
            birth: 0.0,
            occupationalInjury: 0.004,
          },
        },
        insuranceBaseRange: {
          endowment: [7162, 35811],
          health: [7162, 35811],
          unemployment: [7162, 35811],
          birth: [7162, 35811],
          occupationalInjury: [7162, 35811],
        },
        housingFundBaseRange: [2540, 35811],
        references: [
          {
            link: 'https://rsj.beijing.gov.cn/2025',
            description:
              '北京市人社局等三部门《关于2025年度各项社会保险缴费工资基数上下限的通告》',
          },
        ],
      },
    ],
  };

  const mockShanghaiRecipe: CityRecipe = {
    id: 3,
    label: '标准(企业)',
    city: '上海',
    insuranceBaseOnLastMonth: false,
    policies: [
      {
        effectiveDate: '2026-07',
        minimumWage: 2690,
        avgWage: 12307,
        employee: {
          insuranceRate: {
            endowment: 0.08,
            health: 0.02,
            unemployment: 0.005,
          },
        },
        employer: {
          insuranceRate: {
            endowment: 0.16,
            health: 0.095,
            unemployment: 0.005,
            birth: 0.0,
            occupationalInjury: 0.0026,
          },
        },
        insuranceBaseRange: {
          endowment: [7384, 36921],
          health: [7384, 36921],
          unemployment: [7384, 36921],
          birth: [7384, 36921],
          occupationalInjury: [7384, 36921],
        },
        housingFundBaseRange: [2690, 36921],
        references: [
          {
            link: 'https://rsj.shanghai.gov.cn',
            description: '上海市人社局2026社保基数通知',
          },
        ],
      },
    ],
  };

  let mockHttpClient: { get: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    mockDialogRef.close.mockClear();
    mockHttpClient = {
      get: vi.fn().mockImplementation((url: string) => {
        if (url === 'assets/recipes/index.json') {
          return of(mockRecipeIndex);
        }
        if (url === 'assets/recipes/beijing.json') {
          return of(mockBeijingRecipe);
        }
        if (url === 'assets/recipes/shanghai.json') {
          return of(mockShanghaiRecipe);
        }
        return of(null);
      }),
    };
  });

  async function setup(
    data: CityRecipeDialogData = {
      currentCityFile: 'beijing.json',
      currentRecipeId: 2,
      currentYear: 2026,
    },
  ) {
    return render(CityRecipeDialogComponent, {
      imports: [
        MatDialogModule,
        MatTabsModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: data },
        { provide: HttpClient, useValue: mockHttpClient },
      ],
    });
  }

  it('初始渲染应正确加载城市列表与当前选中的北京参数与年份Tab', async () => {
    // Arrange & Act
    await setup();

    // Assert
    await waitFor(() => {
      expect(screen.getByTestId('recipe-dialog-title')).toBeDefined();
    });

    // 验证左侧竖向城市 Tab 项
    expect(screen.getByTestId('city-tab-beijing')).toBeDefined();
    expect(screen.getByTestId('city-tab-shanghai')).toBeDefined();

    // 验证右侧横向年份 Tab
    expect(screen.getByTestId('year-tab-2026')).toBeDefined();
    expect(screen.getByTestId('year-tab-2025')).toBeDefined();

    // 验证北京 2026 参数展示
    expect(screen.getByTestId('val-min-wage').textContent).toContain('2,540');
    expect(screen.getByTestId('val-avg-wage').textContent).toContain('12,116');

    // 验证五险合计
    expect(screen.getByTestId('total-employee-rate').textContent).toContain(
      '10.5%',
    );
    expect(screen.getByTestId('total-employer-rate').textContent).toContain(
      '26.7%',
    );

    // 验证政策参考文件与链接
    expect(
      screen.getByText(/关于2026年度各项社会保险缴费工资基数上下限的通告/i),
    ).toBeDefined();
    const linkEl = screen.getByTestId('ref-link-0') as HTMLAnchorElement;
    expect(linkEl.href).toBe('https://rsj.beijing.gov.cn/');
    expect(linkEl.target).toBe('_blank');
  });

  it('点击左侧竖向城市Tab应按需加载对应城市数据并切换展示', async () => {
    // Arrange
    const user = userEvent.setup();
    await setup();

    await waitFor(() => {
      expect(screen.getByTestId('city-tab-shanghai')).toBeDefined();
    });

    // Act: 点击上海
    const shanghaiTab = screen.getByTestId('city-tab-shanghai');
    await user.click(shanghaiTab);

    // Assert
    await waitFor(() => {
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        'assets/recipes/shanghai.json',
      );
      expect(screen.getByTestId('val-avg-wage').textContent).toContain(
        '12,307',
      );
    });

    expect(screen.getByText(/上海市人社局2026社保基数通知/i)).toBeDefined();

    // Act 2: 再次点击北京，应命中缓存，不再额外发起 HTTP 请求
    const initialGetCount = mockHttpClient.get.mock.calls.length;
    const beijingTab = screen.getByTestId('city-tab-beijing');
    await user.click(beijingTab);

    await waitFor(() => {
      expect(screen.getByTestId('val-avg-wage').textContent).toContain(
        '12,116',
      );
    });
    expect(mockHttpClient.get.mock.calls.length).toBe(initialGetCount);
  });

  it('切换右侧横向年份Tab应联动更新对应年份的基数与政策出处', async () => {
    // Arrange
    const user = userEvent.setup();
    await setup();

    await waitFor(() => {
      expect(screen.getByTestId('year-tab-2025')).toBeDefined();
    });

    // Act: 点击 2025 年份 Tab
    const tab2025 = screen.getByTestId('year-tab-2025');
    await user.click(tab2025);

    // Assert: 验证显示 2025 年度社平工资 11937
    await waitFor(() => {
      expect(screen.getByTestId('val-avg-wage').textContent).toContain(
        '11,937',
      );
    });
    expect(
      screen.getByText(/关于2025年度各项社会保险缴费工资基数上下限的通告/i),
    ).toBeDefined();
  });

  it('点击关闭按钮时应调用 dialogRef.close()', async () => {
    // Arrange
    const user = userEvent.setup();
    await setup();

    await waitFor(() => {
      expect(screen.getByTestId('btn-close-dialog')).toBeDefined();
    });

    // Act
    const closeBtn = screen.getByTestId('btn-close-dialog');
    await user.click(closeBtn);

    // Assert
    expect(mockDialogRef.close).toHaveBeenCalledTimes(1);
  });
});
