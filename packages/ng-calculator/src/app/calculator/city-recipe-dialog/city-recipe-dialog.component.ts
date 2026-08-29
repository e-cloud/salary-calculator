import {
  Component,
  OnInit,
  inject,
  signal,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import {
  CityRecipe,
  CityRecipeIndexItem,
  Policy,
  Reference,
  findLatestPolicyForYear,
} from 'calculator-core';

export interface CityRecipeDialogData {
  currentCityFile?: string;
  currentRecipeId?: number;
  currentYear?: number;
}

@Component({
  selector: 'app-city-recipe-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatChipsModule,
  ],
  templateUrl: './city-recipe-dialog.component.html',
  styleUrls: ['./city-recipe-dialog.component.scss'],
})
export class CityRecipeDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<CityRecipeDialogComponent>);
  readonly data: CityRecipeDialogData =
    inject(MAT_DIALOG_DATA, { optional: true }) || {};
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  readonly recipeIndex = signal<CityRecipeIndexItem[]>([]);
  readonly selectedItem = signal<CityRecipeIndexItem | null>(null);
  readonly currentRecipe = signal<CityRecipe | null>(null);
  readonly availableYears = signal<number[]>([]);
  readonly selectedYear = signal<number>(new Date().getFullYear());
  readonly selectedPolicy = signal<Policy | null>(null);
  readonly selectedYearIndex = signal<number>(0);
  readonly loading = signal<boolean>(false);

  private loadedRecipes = new Map<string, CityRecipe>();

  ngOnInit(): void {
    this.loading.set(true);
    this.http
      .get<CityRecipeIndexItem[]>('assets/recipes/index.json')
      .subscribe({
        next: (items) => {
          const list = items || [];
          this.recipeIndex.set(list);
          if (list.length > 0) {
            let initialItem = list[0];
            if (this.data.currentCityFile) {
              const matched = list.find(
                (item) => item.file === this.data.currentCityFile,
              );
              if (matched) initialItem = matched;
            } else if (this.data.currentRecipeId !== undefined) {
              const matched = list.find(
                (item) => item.id === this.data.currentRecipeId,
              );
              if (matched) initialItem = matched;
            }
            this.selectCity(initialItem);
          } else {
            this.loading.set(false);
          }
          this.cdr.markForCheck();
        },
        error: () => {
          this.loading.set(false);
          this.cdr.markForCheck();
        },
      });
  }

  selectCity(item: CityRecipeIndexItem): void {
    this.selectedItem.set(item);
    if (this.loadedRecipes.has(item.file)) {
      const cached = this.loadedRecipes.get(item.file)!;
      this.currentRecipe.set(cached);
      this.resolveYearsAndPolicy(cached);
      this.loading.set(false);
      this.cdr.markForCheck();
      return;
    }

    this.loading.set(true);
    this.cdr.markForCheck();

    this.http.get<CityRecipe>(`assets/recipes/${item.file}`).subscribe({
      next: (recipe) => {
        this.loadedRecipes.set(item.file, recipe);
        this.currentRecipe.set(recipe);
        this.resolveYearsAndPolicy(recipe);
        this.loading.set(false);
        this.cdr.markForCheck();
      },
      error: () => {
        this.loading.set(false);
        this.cdr.markForCheck();
      },
    });
  }

  onYearTabChange(index: number): void {
    this.selectedYearIndex.set(index);
    const years = this.availableYears();
    if (years[index]) {
      this.selectedYear.set(years[index]);
      this.updateSelectedPolicy();
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  formatBaseRange(
    range: [number, number] | { [key: string]: [number, number] } | undefined,
    field?: string,
  ): string {
    if (!range) return '-';
    if (Array.isArray(range)) {
      return `${range[0].toLocaleString()} ~ ${range[1].toLocaleString()} 元`;
    }
    if (field && range[field]) {
      const subRange = range[field];
      return `${subRange[0].toLocaleString()} ~ ${subRange[1].toLocaleString()} 元`;
    }
    if (range['endowment']) {
      const subRange = range['endowment'];
      return `${subRange[0].toLocaleString()} ~ ${subRange[1].toLocaleString()} 元`;
    }
    return '-';
  }

  formatPercent(rate: number | undefined): string {
    if (rate === undefined || rate === null) return '-';
    return `${(rate * 100).toFixed(2).replace(/\.?0+$/, '')}%`;
  }

  formatMoney(val: number | undefined): string {
    if (val === undefined || val === null) return '-';
    return `${val.toLocaleString()} 元`;
  }

  totalEmployeeInsuranceRate(): number {
    const policy = this.selectedPolicy();
    if (!policy) return 0;
    const rates = policy.employee.insuranceRate;
    return (
      (rates.endowment || 0) + (rates.health || 0) + (rates.unemployment || 0)
    );
  }

  totalEmployerInsuranceRate(): number {
    const policy = this.selectedPolicy();
    if (!policy) return 0;
    const rates = policy.employer.insuranceRate;
    return (
      (rates.endowment || 0) +
      (rates.health || 0) +
      (rates.unemployment || 0) +
      (rates.birth || 0) +
      (rates.occupationalInjury || 0)
    );
  }

  asReference(ref: string | Reference): Reference {
    if (typeof ref === 'string') {
      return { link: ref, description: ref };
    }
    return ref;
  }

  private resolveYearsAndPolicy(recipe: CityRecipe): void {
    if (!recipe || !recipe.policies) {
      this.availableYears.set([]);
      this.selectedPolicy.set(null);
      return;
    }

    const years = recipe.policies
      .map((p) => new Date(p.effectiveDate).getFullYear())
      .filter((y, idx, arr) => arr.indexOf(y) === idx)
      .sort((a, b) => b - a);

    this.availableYears.set(years);

    const targetYear = this.data.currentYear || this.selectedYear();
    if (years.includes(targetYear)) {
      this.selectedYear.set(targetYear);
      this.selectedYearIndex.set(years.indexOf(targetYear));
    } else if (years.length > 0) {
      this.selectedYear.set(years[0]);
      this.selectedYearIndex.set(0);
    }

    this.updateSelectedPolicy();
  }

  private updateSelectedPolicy(): void {
    const recipe = this.currentRecipe();
    if (!recipe) {
      this.selectedPolicy.set(null);
      return;
    }
    const policy = findLatestPolicyForYear(recipe, this.selectedYear());
    this.selectedPolicy.set(policy);
  }
}
