import { BusRouteEvent } from './../interfaces/BusRouteEvent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-trips',
  templateUrl: './planning-trips.component.html',
  styleUrls: ['./planning-trips.component.scss']
})
export class PlanningTripsComponent implements OnInit {

  showEdit:boolean = false;
  busRouteEvent!: BusRouteEvent;

  constructor() { }

  ngOnInit(): void {
  }

  showEditForm() {
    this.showEdit = true;
  }

  editEvent(event:BusRouteEvent) {
    this.busRouteEvent = event;
  }

}
