import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedloanComponent } from './approvedloan.component';

describe('ApprovedloanComponent', () => {
  let component: ApprovedloanComponent;
  let fixture: ComponentFixture<ApprovedloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
