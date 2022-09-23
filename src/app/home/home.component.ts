import { BusStopsResponseService } from './../services/bus-stops-response.service';
import { BusTrackerApiService } from './../services/bus-tracker-api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route } from '../interfaces/Route';
import { DirectionElement } from '../interfaces/Direction';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // TODO :
  // Handle errors in http request
  // unsuscribe on ngOnDestroy

  routes: Route[] = [];
  directions: DirectionElement[] = [];
  isLoaded: boolean = true;
  loadingMessage!: string;
  direction!: string;
  route!: string;
  apiRoutesSuscription!: Subscription;
  apiDirectionsSuscription!: Subscription;
  apiStopsSuscription!: Subscription;

  constructor(
    private busTrackerApiService: BusTrackerApiService,
    private busStopsResponseService: BusStopsResponseService
  ) {}

  ngOnInit(): void {
    this.getAllRoutes();
  }

  ngOnDestroy(): void {
    this.apiRoutesSuscription.unsubscribe();
    this.apiDirectionsSuscription.unsubscribe();
    this.apiStopsSuscription.unsubscribe();
  }

  getAllRoutes() {
    this.isLoaded = false;
    this.loadingMessage = 'loading bus routes...';
    this.apiRoutesSuscription = this.busTrackerApiService
      .getAllRoutes()
      .subscribe(
        (response) => {
          // console.log(response);
          this.isLoaded = true;
          this.routes = response['bustime-response'].routes;
        },
        (error) => {
          this.isLoaded = true;
          console.log(error);
        }
      );
  }

  getDirections(rt: string) {
    this.route = rt;
    this.apiDirectionsSuscription = this.busTrackerApiService
      .getDirections(rt)
      .subscribe(
        (response) => {
          this.directions = response['bustime-response'].directions;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onDirectionSelected() {
    this.isLoaded = false;
    this.loadingMessage = 'loading bus stops...';
    this.apiStopsSuscription = this.busTrackerApiService
      .getStops(this.direction, this.route)
      .subscribe(
        (response) => {
          this.isLoaded = true;
          this.busStopsResponseService.setBusStops(response);
        },
        (error) => {
          this.isLoaded = true;
          console.log(error);
        }
      );
  }
}
