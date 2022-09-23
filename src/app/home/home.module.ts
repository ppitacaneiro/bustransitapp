import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BusCardRouteComponent } from './bus-card-route/bus-card-route.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { PredictionsComponent } from './predictions/predictions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    BusCardRouteComponent,
    RouteDetailComponent,
    MapComponent,
    PredictionsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
  ],
})
export class HomeModule {}
