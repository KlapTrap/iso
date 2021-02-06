import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPanelComponent } from './error-panel.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ErrorPanelComponent],
  exports: [ErrorPanelComponent],
  imports: [CommonModule, MatCardModule, MatIconModule],
})
export class ErrorPanelModule {}
