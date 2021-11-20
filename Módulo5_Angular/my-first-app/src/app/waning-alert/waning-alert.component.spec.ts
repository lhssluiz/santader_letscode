import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaningAlertComponent } from './waning-alert.component';

describe('WaningAlertComponent', () => {
  let component: WaningAlertComponent;
  let fixture: ComponentFixture<WaningAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaningAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
