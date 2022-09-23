import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { StopElement } from 'src/app/interfaces/Stop';
import { BusStopsResponseService } from 'src/app/services/bus-stops-response.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() busStop!: StopElement;
  private map: any;
  private newBusStop!: StopElement;
  private markers: any[] = [];

  constructor(private busStopsResponseService: BusStopsResponseService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
    this.busStopsResponseService.selectedBusStop$.subscribe((response) => {
      if (response.stpid !== '') {
        this.newBusStop = response;
        this.createMarker(this.map);
      }
    });
  }

  createMarker(map: any) {
    const marker = L.marker([this.newBusStop.lat, this.newBusStop.lon]);
    this.markers.push(marker);
    marker.addTo(map).bindPopup(this.newBusStop.stpnm);
  }

  removeMarkers() {
    this.markers.forEach((marker) => {
      this.map.removeLayer(marker);
    });
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.busStop.lat, this.busStop.lon],
      zoom: 10,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }
}
