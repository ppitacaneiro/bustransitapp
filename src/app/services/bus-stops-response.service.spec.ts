import { TestBed } from '@angular/core/testing';

import { BusStopsResponseService } from './bus-stops-response.service';

describe('PatternServiceService', () => {
  let service: BusStopsResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusStopsResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
