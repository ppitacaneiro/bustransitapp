import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusCardRouteComponent } from './bus-card-route.component';

describe('BusCardRouteComponent', () => {
  let component: BusCardRouteComponent;
  let fixture: ComponentFixture<BusCardRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusCardRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusCardRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
