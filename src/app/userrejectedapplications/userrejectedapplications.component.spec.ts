import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrejectedapplicationsComponent } from './userrejectedapplications.component';

describe('UserrejectedapplicationsComponent', () => {
  let component: UserrejectedapplicationsComponent;
  let fixture: ComponentFixture<UserrejectedapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserrejectedapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrejectedapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
