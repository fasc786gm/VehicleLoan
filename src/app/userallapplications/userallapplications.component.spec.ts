import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserallapplicationsComponent } from './userallapplications.component';

describe('UserallapplicationsComponent', () => {
  let component: UserallapplicationsComponent;
  let fixture: ComponentFixture<UserallapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserallapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserallapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
