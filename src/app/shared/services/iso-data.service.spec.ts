import { TestBed } from '@angular/core/testing';

import { IsoDataService } from './iso-data.service';

describe('IsoDataService', () => {
  let service: IsoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
