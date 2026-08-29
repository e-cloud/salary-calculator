import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { SalaryCalculatorStore } from '../calculator/salary-calculator.store';

@Component({
  selector: 'app-help-info',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './help-info.component.html',
  styleUrls: ['./help-info.component.scss'],
})
export class HelpInfoComponent {
  readonly store = inject(SalaryCalculatorStore);

  readonly supportedCities = computed(() => {
    const index = this.store.recipeIndex();
    if (!index || index.length === 0) return ['深圳', '北京', '上海', '广州'];
    return Array.from(new Set(index.map((item) => item.city)));
  });
}
