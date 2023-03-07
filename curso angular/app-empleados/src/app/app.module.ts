import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaractristicasEmpleadoCComponent } from './caractristicas-empleado-c/caractristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadoService } from './empleado.service';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaractristicasEmpleadoCComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule],
  providers: [ServicioEmpleadosService, EmpleadoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
