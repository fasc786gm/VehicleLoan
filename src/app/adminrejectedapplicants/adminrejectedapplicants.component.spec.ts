import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrejectedapplicantsComponent } from './adminrejectedapplicants.component';

describe('AdminrejectedapplicantsComponent', () => {
  let component: AdminrejectedapplicantsComponent;
  let fixture: ComponentFixture<AdminrejectedapplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrejectedapplicantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrejectedapplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
