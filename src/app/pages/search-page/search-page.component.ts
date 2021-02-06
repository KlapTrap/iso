import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  constructor() {}
  public country$ = of({
    id: 'BRA',
    iso2Code: 'BR',
    name: 'Brazil',
    region: { id: 'LCN', iso2code: 'ZJ', value: 'Latin America & Caribbean ' },
    adminregion: {
      id: 'LAC',
      iso2code: 'XJ',
      value: 'Latin America & Caribbean (excluding high income)',
    },
    incomeLevel: { id: 'UMC', iso2code: 'XT', value: 'Upper middle income' },
    lendingType: { id: 'IBD', iso2code: 'XF', value: 'IBRD' },
    capitalCity: 'Brasilia',
    longitude: parseFloat('-47.9292'),
    latitude: parseFloat('-15.7801'),
  });
  ngOnInit(): void {}
}
