import { BusTrackerApiService } from './../../services/bus-tracker-api.service';
import { Component, OnInit } from '@angular/core';
import { BusStopsResponseService } from 'src/app/services/bus-stops-response.service';
import {
  ErrorPredictionResponse,
  Prd,
  PredictionResponse,
} from 'src/app/interfaces/Prediction';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss'],
})
export class PredictionsComponent implements OnInit {
  errors: ErrorPredictionResponse[] = [];
  predictions: Prd[] = [];
  isLoading: boolean = true;

  constructor(
    private busStopsResponseService: BusStopsResponseService,
    private busTrackerApiService: BusTrackerApiService
  ) {}

  // TODO: Handle errors
  ngOnInit(): void {
    this.busStopsResponseService.selectedBusStop$.subscribe((result) => {
      this.busTrackerApiService.getPredictions(+result.stpid).subscribe(
        (response) => {
          this.isLoading = false;
          if (response['bustime-response'].error) {
            this.errors = response['bustime-response'].error;
            this.predictions = [];
          } else {
            this.predictions = response['bustime-response'].prd;
            this.errors = [];
          }
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
