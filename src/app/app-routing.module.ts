import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
import { OficinaComponent } from './components/oficina/oficina.component';
import { OficinasModalityComponent } from './components/oficinasModality/oficinasModality.component';
import { OficinaDetailComponent } from './components/oficina-detail/oficina-detail.component';
/*
Este fichero es donde configuraremos las rutas de la aplicación.

const routes: Routes = [];
*/
const routes: Routes = [
    {
      path : '', //En este caso decimos el componente que mostraremos por defecto
      //component : EmployeeComponent
      component : HomeComponent
    },
    {
      path : 'login', //cuando definimos el 'path' no puede empezar por '/'
      component : LoginComponent
    },
    {
      path : 'home', //cuando definimos el 'path' no puede empezar por '/'
      component : HomeComponent
    },
    //Oficina
    {
      path : 'oficina', //cuando definimos el 'path' no puede empezar por '/'
       component : OficinaComponent
    },
    //Oficina Detail
    {
      path : 'oficinadetails/:id', //cuando definimos el 'path' no puede empezar por '/'
       component : OficinaDetailComponent
    },
    {path : 'oficinas/:id', component : OficinasComponent},
    //Oficinas Alquiler
    {path : 'oficinas/modality/:modality', component : OficinasModalityComponent},
    //Employee
    {path : 'employee', component : EmployeeComponent},
    //aqui estamos pasando parametros en el pahtparam, eje: componente1/spiderman/marvel
    //{path : 'componente1/:nombre/:universo', component : Componente1Component},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { 
  
  
  }
  