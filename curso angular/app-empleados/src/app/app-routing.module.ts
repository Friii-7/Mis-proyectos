import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  { path: 'farzin', component: HomeComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'quienes', component: QuienesSomosComponent },
  { path: 'contacto', component: ContactosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
