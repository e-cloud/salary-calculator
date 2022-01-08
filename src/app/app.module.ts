import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MonthPipe } from './calculator/month.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

zh[14] = ['#,###0.###', '#,##0%', '¤#,###0.00', '#E0'];

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent, NavbarComponent, CalculatorComponent, MonthPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatAutocompleteModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
