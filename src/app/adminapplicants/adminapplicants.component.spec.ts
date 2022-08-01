import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminapplicantsComponent } from './adminapplicants.component';

describe('AdminapplicantsComponent', () => {
  let component: AdminapplicantsComponent;
  let fixture: ComponentFixture<AdminapplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminapplicantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminapplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
