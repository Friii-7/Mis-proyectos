import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css'],
})
export class EmpleadoHijoCComponent implements OnInit {
  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;

  constructor() {}

  ngOnInit(): void {}

  empleados: Empleado[] = [
    new Empleado('Farzin', 'PJ', 'presidente', 7500),
    new Empleado('Farzad', 'AJ', 'Directora', 5500),
    new Empleado('Godarz', 'Filsof', 'Jefe seccion', 3500),
    new Empleado('Alex', 'Belga', 'Administrativo', 2500),
  ];

  empleadoAgrado(empleado: Empleado) {
    this.empleados.push(empleado);
  }

  arrayCaractristicas = [''];

  agregarCaractristica(nuevaCaractristica: string) {
    this.arrayCaractristicas.push(nuevaCaractristica);
  }
}
