import { TestBed } from '@angular/core/testing';

import { BusTrackerApiService } from './bus-tracker-api.service';

describe('BusTrackerApiService', () => {
  let service: BusTrackerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusTrackerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
