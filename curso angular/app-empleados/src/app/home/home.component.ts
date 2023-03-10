import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadoService } from '../empleado.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  titulo = 'Listado de Empleados';
  constructor(
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadoService
  ) {
    // this.empleados = this.empleadosService.empleados;
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  empleados: Empleado[] = [];

  agregarEmleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    // this.miServicio.muestraMensaje('Nombre del empleado: ' + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
}
