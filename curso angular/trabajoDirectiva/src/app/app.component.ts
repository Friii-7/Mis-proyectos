import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Registro  de Usuarios';
  mensaje = '';
  registrado = false;
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  entradas: any[];

  constructor() {
    this.entradas = [
      { titulo: 'Paython cada dia mas presentedfsgvdsffv' },
      { titulo: 'typesciript cada dia mas presente sdhhjsdkl' },
      { titulo: 'javascrip cadas dia mas presente' },
      { titulo: 'i love you' },
      { titulo: 'voy con mucha suerte con programing' },
    ];
  }

  registrarUsuario() {
    this.registrado = true;

    this.mensaje = 'usuario registrado con exito';
  }
}
