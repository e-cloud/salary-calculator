import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HelpInfoComponent } from './help-info/help-info.component';
import { IconRegistryInitService } from './core/icon-registry-init.service';
import { ICON_REGISTRY_CONFIG } from './icon-registry-config';

export const STORAGE_KEY_GUIDE_SHOWN = 'salary_calculator_guide_shown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CalculatorComponent,
    MatDialogModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '个税与薪资计算器';
  private iconRegistryInit = inject(IconRegistryInitService);
  private dialog = inject(MatDialog);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    // apply the registry to icon registry service for dynamic svg icon loading
    this.iconRegistryInit.init(ICON_REGISTRY_CONFIG);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const hasSeenGuide = localStorage.getItem(STORAGE_KEY_GUIDE_SHOWN);
      if (hasSeenGuide !== 'true') {
        const dialogRef = this.dialog.open(HelpInfoComponent, {
          width: '720px',
          maxWidth: '92vw',
        });
        dialogRef.afterClosed().subscribe(() => {
          localStorage.setItem(STORAGE_KEY_GUIDE_SHOWN, 'true');
        });
      }
    }
  }
}
