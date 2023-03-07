import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable()
export class EmpleadoService {
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {}
  empleados: Empleado[] = [
    new Empleado('Farzin', 'PJ', 'presidente', 7500),
    new Empleado('Farzad', 'AJ', 'Directora', 5500),
    new Empleado('Godarz', 'Filsof', 'Jefe seccion', 3500),
    new Empleado('Alex', 'Belga', 'Administrativo', 2500),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Persona que se va agregar: ' +
        '\n' +
        empleado.nombre +
        '\n' +
        'Salario: ' +
        empleado.salario
    );
    this.empleados.push(empleado);
  }
}
