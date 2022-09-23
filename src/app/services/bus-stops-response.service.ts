import { StopElement } from './../interfaces/Stop';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stop } from '../interfaces/Stop';

@Injectable({
  providedIn: 'root',
})
export class BusStopsResponseService {
  busStopsResponse: Stop = {
    'bustime-response': {
      stops: [],
    },
  };

  busStop: StopElement = {
    stpid: '',
    stpnm: '',
    lat: 0,
    lon: 0,
  };

  private busStops$ = new BehaviorSubject<Stop>(this.busStopsResponse);
  selectedBusStops$ = this.busStops$.asObservable();

  private busStop$ = new BehaviorSubject<StopElement>(this.busStop);
  selectedBusStop$ = this.busStop$.asObservable();

  constructor() {}

  setBusStops(busStopsReponse: Stop) {
    this.busStops$.next(busStopsReponse);
  }

  setBusStop(busStop: StopElement) {
    this.busStop$.next(busStop);
  }
}
