import { Component } from '@angular/core';
import { IconRegistryInitService } from './core/icon-registry-init.service';
import { ICON_REGISTRY_CONFIG } from './icon-registry-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'salary-calculator';

  constructor(iconRegistryInit: IconRegistryInitService) {
    // apply the registry to icon registry service for dynamic svg icon loading
    iconRegistryInit.init(ICON_REGISTRY_CONFIG);
  }
}
