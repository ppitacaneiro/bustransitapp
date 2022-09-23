import { BusStopsResponseService } from './../../services/bus-stops-response.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { StopElement } from '../../interfaces/Stop';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.scss'],
})
export class RouteDetailComponent implements OnInit {
  @Input() hasNewRoute!: boolean;
  busStops: StopElement[] = [];
  initialBusStop!: StopElement;
  isHiddenPredictionComponent: boolean = true;

  constructor(private busStopsResponseService: BusStopsResponseService) {}

  ngOnInit(): void {
    this.busStopsResponseService.selectedBusStops$.subscribe((result) => {
      if (result['bustime-response'].stops.length > 0) {
        this.busStops = result['bustime-response'].stops;
        this.initialBusStop = this.busStops[0];
      }
    });
  }

  selectBusStop(busStop: StopElement) {
    this.isHiddenPredictionComponent = false;
    this.busStopsResponseService.setBusStop(busStop);
  }
}
