import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { BonusOptimizationResult, BonusTaxTrapResult } from 'calculator-core';

@Component({
  selector: 'app-bonus-optimization-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './bonus-optimization-card.component.html',
  styleUrls: ['./bonus-optimization-card.component.scss'],
})
export class BonusOptimizationCardComponent {
  @Input() optimizationResult?: BonusOptimizationResult;
  @Input() trapResult?: BonusTaxTrapResult;
  @Input() annualBonus: number = 0;

  readonly trapRangesDisplay = [
    {
      range: '36,001 ~ 38,566.67 元',
      threshold: '36,000 元',
      taxJump: '3% → 10%',
    },
    {
      range: '144,001 ~ 160,500 元',
      threshold: '144,000 元',
      taxJump: '10% → 20%',
    },
    {
      range: '300,001 ~ 318,333.33 元',
      threshold: '300,000 元',
      taxJump: '20% → 25%',
    },
    {
      range: '420,001 ~ 447,500 元',
      threshold: '420,000 元',
      taxJump: '25% → 30%',
    },
    {
      range: '660,001 ~ 706,538.46 元',
      threshold: '660,000 元',
      taxJump: '30% → 35%',
    },
    {
      range: '960,001 ~ 1,120,000 元',
      threshold: '960,000 元',
      taxJump: '35% → 45%',
    },
  ];
}
