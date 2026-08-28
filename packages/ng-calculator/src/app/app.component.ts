import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { IconRegistryInitService } from './core/icon-registry-init.service';
import { ICON_REGISTRY_CONFIG } from './icon-registry-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'salary-calculator';
  private iconRegistryInit = inject(IconRegistryInitService);

  constructor() {
    // apply the registry to icon registry service for dynamic svg icon loading
    this.iconRegistryInit.init(ICON_REGISTRY_CONFIG);
  }
}
