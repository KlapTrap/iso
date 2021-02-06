import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, CountryParsed } from '../types/country';
import { HttpClient } from '@angular/common/http';
import { SearchResult, SearchResultError } from '../types/api';
import { map } from 'rxjs/operators';

export interface SearchResponse {
  country: CountryParsed | null;
  error: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class IsoDataService {
  public get(isoCode: string): Observable<SearchResponse> {
    return this.httpClient
      .get<SearchResult<Country> | SearchResultError>(
        `http://api.worldbank.org/v2/country/${isoCode}?format=json`
      )
      .pipe(map((country) => this.parseResponse(country)));
  }

  private parseResponse(
    response: SearchResult<Country> | SearchResultError
  ): SearchResponse {
    const errorRespone = response as SearchResultError;
    const okResponse = response as SearchResult<Country>;
    if (errorRespone[0].message) {
      return { country: null, error: true };
    } else {
      const country = okResponse[1][0];
      return {
        country: {
          ...country,
          longitude: parseFloat(country.longitude),
          latitude: parseFloat(country.latitude),
        },
        error: false,
      };
    }
  }
  constructor(private httpClient: HttpClient) {}
}
