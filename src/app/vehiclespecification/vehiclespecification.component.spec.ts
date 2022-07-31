import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclespecificationComponent } from './vehiclespecification.component';

describe('VehiclespecificationComponent', () => {
  let component: VehiclespecificationComponent;
  let fixture: ComponentFixture<VehiclespecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclespecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclespecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
