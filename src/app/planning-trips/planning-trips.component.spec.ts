import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningTripsComponent } from './planning-trips.component';

describe('PlanningTripsComponent', () => {
  let component: PlanningTripsComponent;
  let fixture: ComponentFixture<PlanningTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
