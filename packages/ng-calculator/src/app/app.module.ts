import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MonthPipe } from './calculator/month.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HelpInfoComponent } from './help-info/help-info.component';
import { CalculatorFormComponent } from './calculator/calculator-form/calculator-form.component';
import { MonthlyResultsComponent } from './calculator/monthly-results/monthly-results.component';
import { SummaryChartsComponent } from './calculator/summary-charts/summary-charts.component';
import { SummaryDetailsComponent } from './calculator/summary-details/summary-details.component';
import { SyncConfirmationDialogComponent } from './calculator/monthly-results/sync-confirmation-dialog.component';

zh[14] = ['#,###0.###', '#,##0%', '¤#,###0.00', '#E0'];

registerLocaleData(zh);

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    echarts: any;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalculatorComponent,
    MonthPipe,
    HelpInfoComponent,
    CalculatorFormComponent,
    MonthlyResultsComponent,
    SummaryChartsComponent,
    SummaryDetailsComponent,
    SyncConfirmationDialogComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    NgxEchartsModule.forRoot({
      /**
       * Using ECharts from CDN
       * Instead of importing from node_modules
       */
      echarts: window.echarts,
    }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: '¥',
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
