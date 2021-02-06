import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Country } from '../../types/country';
type RequiredCountryValues =
  | 'name'
  | 'id'
  | 'iso2Code'
  | 'region'
  | 'capitalCity'
  | 'longitude'
  | 'latitude';
@Component({
  selector: 'app-country-details-panel',
  templateUrl: './country-details-panel.component.html',
  styleUrls: ['./country-details-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryDetailsPanelComponent {
  @Input() country: Pick<Country, RequiredCountryValues> | null = null;

  public getCountryImageStyle(iso2Code: string): string {
    return `url(https://www.countryflags.io/${iso2Code.toLowerCase()}/flat/64.png)`;
  }
}
