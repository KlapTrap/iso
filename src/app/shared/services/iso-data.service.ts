import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Country, CountryParsed } from '../types/country';
import { HttpClient } from '@angular/common/http';
import { SearchResult, SearchResultError } from '../types/api';
import { map, tap } from 'rxjs/operators';

export interface SearchResponse {
  search: string;
  country: CountryParsed | null;
  error: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class IsoDataService {
  public busy$ = new Subject<boolean>();
  private cache = new Map<string, SearchResponse>();

  public get(search: string): Observable<SearchResponse> {
    const cachedRes = this.getCachedResponse(search);
    if (cachedRes) {
      return of(cachedRes);
    } else {
      this.requestStarted();
      return this.makeApiRequest(search).pipe(tap(() => this.requestEnded()));
    }
  }

  private makeApiRequest(search: string): Observable<SearchResponse> {
    return this.httpClient
      .get<SearchResult<Country> | SearchResultError>(
        `http://api.worldbank.org/v2/country/${search}?format=json`
      )
      .pipe(
        map((country) => this.parseResponse(country, search)),
        tap((response) => this.cacheResponse(search, response))
      );
  }

  private parseResponse(
    response: SearchResult<Country> | SearchResultError,
    search: string
  ): SearchResponse {
    const errorRespone = response as SearchResultError;
    const okResponse = response as SearchResult<Country>;
    if (errorRespone[0].message) {
      return { country: null, error: true, search };
    } else {
      const country = okResponse[1][0];
      return {
        country: {
          ...country,
	  longitude: country.longitude ? parseFloat(country.longitude) : null,
	  latitude: country.longitude ? parseFloat(country.longitude) : null,
        },
        error: false,
        search,
      };
    }
  }

  private requestStarted(): void {
    this.busy$.next(true);
  }

  private requestEnded(): void {
    this.busy$.next(false);
  }

  private getCachedResponse(search: string): SearchResponse | undefined {
    return this.cache.get(search);
  }

  private cacheResponse(search: string, response: SearchResponse): void {
    if (!response.error) {
      this.cache.set(search, response);
    }
  }

  constructor(private httpClient: HttpClient) {}
}
