import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Route } from 'src/app/interfaces/Route';

@Component({
  selector: 'app-bus-card-route',
  templateUrl: './bus-card-route.component.html',
  styleUrls: ['./bus-card-route.component.scss'],
})
export class BusCardRouteComponent implements OnInit {
  @Input() routes: Route[] | undefined;
  @Output() onRouteSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onRouteSelection(rt: string) {
    this.onRouteSelected.emit(rt);
  }
}
