import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { PageWrapperModule } from 'src/app/shared/components/page-wrapper/page-wrapper.module';

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
  ],
})
export class SearchPageModule {}
