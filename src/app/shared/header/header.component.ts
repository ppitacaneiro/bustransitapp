import { BusTrackerApiService } from './../../services/bus-tracker-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  date: string | undefined;

  constructor(private busTrackerApiService: BusTrackerApiService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  getTime() {
    this.busTrackerApiService.getTime().subscribe(
      (response) => {
        this.date = response['bustime-response'].tm;
        this.date = this.date?.substring(8, this.date.length);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
