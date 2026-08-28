import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-help-info',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './help-info.component.html',
  styleUrls: ['./help-info.component.scss'],
})
export class HelpInfoComponent {}
