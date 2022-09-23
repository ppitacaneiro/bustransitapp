import { PredictionResponse } from './../interfaces/Prediction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from '../interfaces/Direction';
import { PatternResponse } from '../interfaces/Pattern';
import { BustimeRoutesResponse } from '../interfaces/Route';
import { Stop } from '../interfaces/Stop';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BusTrackerApiService {
  // TODO : Resolve problem with CORS proxy.conf
  private baseUrl: string = 'http://www.ctabustracker.com/bustime/api/v2/';
  private key: string = 'Ti4J2cJdaLC5jSmstaGttY4yZ';
  private format: string = 'json';

  constructor(private httpClient: HttpClient) {}

  // http://www.ctabustracker.com/bustime/api/v2/gettime?key=Ti4J2cJdaLC5jSmstaGttY4yZ&format=json
  getTime(): Observable<any> {
    return this.httpClient.get<any>(
      `${this.baseUrl}gettime?key=${this.key}&format=${this.format}`
    );
  }

  // http://www.ctabustracker.com/bustime/api/v2/getroutes?key=Ti4J2cJdaLC5jSmstaGttY4yZ&format=json
  getAllRoutes(): Observable<BustimeRoutesResponse> {
    return this.httpClient.get<BustimeRoutesResponse>(
      `${this.baseUrl}getroutes?key=${this.key}&format=${this.format}`
    );
  }

  // http://www.ctabustracker.com/bustime/api/v2/getdirections?key=Ti4J2cJdaLC5jSmstaGttY4yZ&rt=20&format=json
  getDirections(rt: string): Observable<Direction> {
    return this.httpClient.get<Direction>(
      `${this.baseUrl}getdirections?key=${this.key}&format=${this.format}&rt=${rt}`
    );
  }

  // http://www.ctabustracker.com/bustime/api/v2/getpatterns?key=Ti4J2cJdaLC5jSmstaGttY4yZ&format=json&rt=20
  getPatterns(rt: string): Observable<PatternResponse> {
    return this.httpClient.get<PatternResponse>(
      `${this.baseUrl}getpatterns?key=${this.key}&format=${this.format}&rt=${rt}`
    );
  }

  // http://www.ctabustracker.com/bustime/api/v2/getstops?key=Ti4J2cJdaLC5jSmstaGttY4yZ&format=json&rt=20&dir=Westbound
  getStops(direction: string, rt: string): Observable<Stop> {
    return this.httpClient.get<Stop>(
      `${this.baseUrl}getstops?key=${this.key}&format=${this.format}&rt=${rt}&dir=${direction}`
    );
  }

  // http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=Ti4J2cJdaLC5jSmstaGttY4yZ&format=json&stpid=460
  getPredictions(stpid: number): Observable<PredictionResponse> {
    return this.httpClient.get<PredictionResponse>(
      `${this.baseUrl}getpredictions?key=${this.key}&format=${this.format}&stpid=${stpid}`
    );
  }
}
