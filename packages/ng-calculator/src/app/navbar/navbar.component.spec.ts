import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { MatDialog } from '@angular/material/dialog';
import { NavbarComponent } from './navbar.component';
import { HelpInfoComponent } from '../help-info/help-info.component';

describe('NavbarComponent 顶部导航栏测试', () => {
  const mockDialog = {
    open: vi.fn(),
  };

  async function setup() {
    mockDialog.open.mockClear();
    return render(NavbarComponent, {
      componentProviders: [{ provide: MatDialog, useValue: mockDialog }],
    });
  }

  it('正确渲染标题与图标', async () => {
    // Arrange
    await setup();

    // Act & Assert
    expect(screen.getByText('Calculator')).toBeDefined();
  });

  it('用户点击帮助按钮时，应通过 MatDialog 打开 HelpInfoComponent', async () => {
    // Arrange
    const user = userEvent.setup();
    await setup();
    const helpButton = screen.getByLabelText('Help message for the tool');

    // Act
    await user.click(helpButton);

    // Assert
    expect(mockDialog.open).toHaveBeenCalledTimes(1);
    expect(mockDialog.open).toHaveBeenCalledWith(HelpInfoComponent);
  });
});
