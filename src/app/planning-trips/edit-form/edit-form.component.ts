import { FirebaseService } from './../../services/firebase.service';
import { DirectionElement } from './../../interfaces/Direction';
import { Route } from './../../interfaces/Route';
import { BusTrackerApiService } from './../../services/bus-tracker-api.service';
import { BusRouteEvent } from './../../interfaces/BusRouteEvent';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StopElement } from 'src/app/interfaces/Stop';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit, OnChanges {
  @Output() busRouteEventEmitter = new EventEmitter();
  @Input() busRouteEventToEdit!: BusRouteEvent;

  routes: Route[] = [];
  directions: DirectionElement[] = [];
  busStops:StopElement[] = [];
  hasBusStops:boolean = false;
  hasDirections:boolean = false;
  hasErrors:boolean = false;
  errorMessage!: string;
  isUpdating:boolean = false;

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
  
  constructor(
    private busTrackerApiService:BusTrackerApiService,
    private firebaseService:FirebaseService
  ) {}

  ngOnInit() {
    this.getAllRoutes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const busRouteEventToEdit = changes.busRouteEventToEdit.currentValue;
    if (busRouteEventToEdit !== undefined) {
      this.busRouteEvent.key = busRouteEventToEdit.key;
      this.isUpdating = true;
      this.busRouteEvent.busRoute = busRouteEventToEdit.busRoute;
      this.selectDirection();
      this.busRouteEvent.direction = busRouteEventToEdit.direction;
      this.selectBusStops();
      this.busRouteEvent.busStop = busRouteEventToEdit.busStop;
      this.busRouteEvent.date = busRouteEventToEdit.date;
      this.busRouteEvent.time = busRouteEventToEdit.time;
    }
  }

  getAllRoutes() {
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

  create() {
    this.firebaseService.createEvent(this.busRouteEvent)
      .then(() => {})
      .catch(err => console.log(err));
  }

  update() {
    this.firebaseService.update(this.busRouteEvent.key!,this.busRouteEvent)
      .then(() => {})
      .catch(err => console.log(err));
  }

  deleteBusEvent() {
    this.firebaseService.delete(this.busRouteEvent.key!)
      .then(() => {})
      .catch(err => console.log(err));
  }
}
