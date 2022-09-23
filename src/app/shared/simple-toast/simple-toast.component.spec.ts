import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleToastComponent } from './simple-toast.component';

describe('SimpleToastComponent', () => {
  let component: SimpleToastComponent;
  let fixture: ComponentFixture<SimpleToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
