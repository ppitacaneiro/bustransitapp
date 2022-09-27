import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningTripsComponent } from './planning-trips.component';
import { PlanningTripsRoutingModule } from './planning-trips-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlanningTripsComponent],
  imports: [CommonModule, PlanningTripsRoutingModule, RouterModule],
})
export class PlanningTripsModule {}
