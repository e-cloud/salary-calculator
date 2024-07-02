import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpInfoComponent } from '../help-info/help-info.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private dialog: MatDialog) {}

  openHelpDialog() {
    this.dialog.open(HelpInfoComponent);
  }
}
