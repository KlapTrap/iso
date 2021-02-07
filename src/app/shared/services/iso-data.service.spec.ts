import { TestBed } from '@angular/core/testing';

import { IsoDataService } from './iso-data.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { switchMap } from 'rxjs/operators';
import { SearchResultError } from '../types/api';

describe('IsoDataService', () => {
  let service: IsoDataService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(IsoDataService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get value from api', () => {
    expect(service).toBeTruthy();
    const search = 'GB';
    service.get(search).subscribe();
    const request = httpController.expectOne(
      `http://api.worldbank.org/v2/country/${search}?format=json`
    );
    request.flush([[], [{}]]);
    httpController.verify();
  });

  it('should error', (done) => {
    expect(service).toBeTruthy();
    const search = 'GB';
    const errorResponse: SearchResultError = [{ message: 'oops' }];
    service.get(search).subscribe((res) => {
      expect(res.error).toBeTrue();
      done();
    });
    const request = httpController.expectOne(
      `http://api.worldbank.org/v2/country/${search}?format=json`
    );
    request.flush(errorResponse);
    httpController.verify();
  });

  it('should get value from cache after sucessful api call', (done) => {
    expect(service).toBeTruthy();
    const search = 'GB';
    const resValue = { name: 'Test123' };
    let cachedRes: any;
    service
      .get(search)
      .pipe(
        switchMap((resInCache) => {
          cachedRes = resInCache;
          return service.get(search);
        })
      )
      .subscribe((res) => {
        expect(cachedRes).toBe(res);
        expect(res.error).toBeFalse();
        expect(res.country?.name).toBe(resValue.name);
        done();
      });
    const request = httpController.expectOne(
      `http://api.worldbank.org/v2/country/${search}?format=json`
    );
    request.flush([[], [resValue]]);
    httpController.verify();
  });

  it('should not get value from cache after unsucessful api call', (done) => {
    expect(service).toBeTruthy();
    const search = 'GB';
    const errorResponse: SearchResultError = [{ message: 'oops' }];
    service
      .get(search)
      .pipe(switchMap(() => service.get(search)))
      .subscribe((res) => {
        expect(res.error).toBeTrue();
        expect(res.country).toBeFalsy();
        done();
      });
    const request1 = httpController.expectOne(
      `http://api.worldbank.org/v2/country/${search}?format=json`
    );
    request1.flush(errorResponse);
    const request2 = httpController.expectOne(
      `http://api.worldbank.org/v2/country/${search}?format=json`
    );
    request2.flush(errorResponse);
  });
});
