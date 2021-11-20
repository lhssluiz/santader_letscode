import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsByTerminalComponent } from './components-by-terminal.component';

describe('ComponentsByTerminalComponent', () => {
  let component: ComponentsByTerminalComponent;
  let fixture: ComponentFixture<ComponentsByTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsByTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsByTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
