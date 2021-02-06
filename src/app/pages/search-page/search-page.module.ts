import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { PageWrapperModule } from 'src/app/shared/components/page-wrapper/page-wrapper.module';
import { CountryDetailsPanelModule } from 'src/app/shared/components/country-details-panel/country-details-panel.module';
import { MapPanelModule } from 'src/app/shared/components/map-panel/map-panel.module';
import { ErrorPanelModule } from 'src/app/shared/components/error-panel/error-panel.module';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    MatToolbarModule,
    PageWrapperModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    CountryDetailsPanelModule,
    MapPanelModule,
    MatIconModule,
    ErrorPanelModule,
    MatProgressSpinnerModule,
  ],
})
export class SearchPageModule {}
