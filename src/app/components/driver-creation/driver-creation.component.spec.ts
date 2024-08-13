import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCreationComponent } from './driver-creation.component';

describe('DriverCreationComponent', () => {
  let component: DriverCreationComponent;
  let fixture: ComponentFixture<DriverCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverCreationComponent]
    });
    fixture = TestBed.createComponent(DriverCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
