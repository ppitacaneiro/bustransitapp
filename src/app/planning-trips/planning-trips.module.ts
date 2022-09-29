import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningTripsComponent } from './planning-trips.component';
import { PlanningTripsRoutingModule } from './planning-trips-routing.module';
import { RouterModule } from '@angular/router';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PlanningTripsComponent,
    FullCalendarComponent,
    EditFormComponent,
  ],
  imports: [
    CommonModule,
    PlanningTripsRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule,
    SharedModule,
  ],
})
export class PlanningTripsModule {}
