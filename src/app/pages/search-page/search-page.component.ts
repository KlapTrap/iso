import { Component, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { IsoDataService } from 'src/app/shared/services/iso-data.service';
import { filter, switchMap, debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  constructor(private isoService: IsoDataService) {}

  public searchValue$$ = new Subject<string | null>();

  public parsedResponse$ = this.searchValue$$.pipe(
    debounceTime(250),
    filter((value) => !!value && value.length > 1 && value.length < 4),
    switchMap((value) => this.isoService.get(value as string))
  );

  public search(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    this.searchValue$$.next(target.value);
  }
}
