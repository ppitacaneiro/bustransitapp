import { BusRouteEvent } from './../interfaces/BusRouteEvent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-trips',
  templateUrl: './planning-trips.component.html',
  styleUrls: ['./planning-trips.component.scss']
})
export class PlanningTripsComponent implements OnInit {

  busRouteEvent!: BusRouteEvent;

  constructor() { }

  ngOnInit(): void {
  }

  sendBusRouteEvent(busRouteEvent:BusRouteEvent) {
    this.busRouteEvent = busRouteEvent;
  }

}
