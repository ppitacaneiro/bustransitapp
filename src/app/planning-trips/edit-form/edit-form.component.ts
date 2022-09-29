import { DirectionElement } from './../../interfaces/Direction';
import { Route } from './../../interfaces/Route';
import { BusTrackerApiService } from './../../services/bus-tracker-api.service';
import { BusRouteEvent } from './../../interfaces/BusRouteEvent';
import { Component, OnInit } from '@angular/core';
import { StopElement } from 'src/app/interfaces/Stop';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {

  routes: Route[] = [];
  directions: DirectionElement[] = [];
  busStops:StopElement[] = [];
  hasBusStops:boolean = false;
  hasDirections:boolean = false;
  hasErrors:boolean = false;
  errorMessage!: string;

  busRouteEvent:BusRouteEvent = {
    busRoute: '',
    direction: '',
    busStop: '',
    date: {
      year: 0,
      month: 0,
      day: 0,  
    },
    time: {
      hour: 0,
      minute: 0,
      second: 0
    }
  };
  
  constructor(private busTrackerApiService:BusTrackerApiService) {}

  ngOnInit() {
    this.busTrackerApiService.getAllRoutes().subscribe(
      (response) => {
        this.routes = response['bustime-response'].routes;
      },
      (error) => {
        this.hasErrors = true;
        this.errorMessage = error;
      }
    );
  }

  selectDirection() {
    this.busTrackerApiService.getDirections(this.busRouteEvent.busRoute).subscribe(
      (response) => {
        this.directions = response['bustime-response'].directions;
        this.hasDirections = true;
      },
      (error) => {
        this.hasErrors = true;
        this.errorMessage = error;
      }
    );
  }

  selectBusStops() {
    this.busTrackerApiService.getStops(this.busRouteEvent.direction,this.busRouteEvent.busRoute).subscribe(
      (response) => {
        this.busStops = response['bustime-response'].stops;
        this.hasBusStops = true;
      },
      (error) => {
        this.hasErrors = true;
        this.errorMessage = error;
      }
    );
  }

  save() {}
}
