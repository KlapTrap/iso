import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailsPanelComponent } from './country-details-panel.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CountryDetailsPanelComponent],
  exports: [CountryDetailsPanelComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    MatButtonModule,
  ],
})
export class CountryDetailsPanelModule {}
