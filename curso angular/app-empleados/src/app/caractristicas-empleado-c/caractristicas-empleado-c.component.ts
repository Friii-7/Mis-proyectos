import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caractristicas-empleado-c',
  templateUrl: './caractristicas-empleado-c.component.html',
  styleUrls: ['./caractristicas-empleado-c.component.css'],
})
export class CaractristicasEmpleadoCComponent implements OnInit {
  @Output() CaractristicasEmpleados = new EventEmitter<string>();

  // constructor(private miServicio: ServicioEmpleadosService) {}

  ngOnInit(): void {}

  agregaCarctristicas(value: string) {
    // this.miServicio.muestraMensaje(value);
    // this.CaractristicasEmpleados.emit(value);
  }
}
