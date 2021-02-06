import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPanelComponent } from './map-panel.component';
import { MatCardModule } from '@angular/material/card';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  exports: [MapPanelComponent],
  declarations: [MapPanelComponent],
  imports: [CommonModule, MatCardModule, GoogleMapsModule],
})
export class MapPanelModule {}
