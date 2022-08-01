import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserapprovedapplicationsComponent } from './userapprovedapplications.component';

describe('UserapprovedapplicationsComponent', () => {
  let component: UserapprovedapplicationsComponent;
  let fixture: ComponentFixture<UserapprovedapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserapprovedapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserapprovedapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
