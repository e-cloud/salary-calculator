import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonusOptimizationCardComponent } from './bonus-optimization-card.component';
import { describe, it, expect, beforeEach } from 'vitest';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BonusOptimizationCardComponent', () => {
  let component: BonusOptimizationCardComponent;
  let fixture: ComponentFixture<BonusOptimizationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonusOptimizationCardComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BonusOptimizationCardComponent);
    component = fixture.componentInstance;
  });

  it('当处于盲区时正确渲染诊断状态和盲区图谱', () => {
    component.annualBonus = 36500;
    component.trapResult = {
      isTrap: true,
      currentBonus: 36500,
      lowerThreshold: 36000,
      upperThreshold: 38566.67,
      lostAmount: 2309.1,
      warningMessage: '年终奖 36,500 元落在盲区内',
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('[data-testid="bonus-optimization-card"]'),
    ).toBeTruthy();
    expect(
      compiled.querySelector('[data-testid="bonus-optimization-status-alert"]')
        ?.textContent,
    ).toContain('命中盲区');
    expect(compiled.textContent).toContain('全国个税 6 大无效盲区速查图谱');
    expect(compiled.textContent).toContain('36,001 ~ 38,566.67 元');
  });

  it('当未处于盲区且有年终奖时，展示正常区间徽章', () => {
    component.annualBonus = 30000;
    component.trapResult = {
      isTrap: false,
      currentBonus: 30000,
      lowerThreshold: 0,
      upperThreshold: 0,
      lostAmount: 0,
      warningMessage: '',
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('[data-testid="bonus-optimization-status-alert"]')
        ?.textContent,
    ).toContain('正常区间');
  });
});
