import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractristicasEmpleadoCComponent } from './caractristicas-empleado-c.component';

describe('CaractristicasEmpleadoCComponent', () => {
  let component: CaractristicasEmpleadoCComponent;
  let fixture: ComponentFixture<CaractristicasEmpleadoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaractristicasEmpleadoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaractristicasEmpleadoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
