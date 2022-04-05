import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Oficinas } from './models/oficinas';
import { OficinasComponent } from './components/oficinas/oficinas.component';

/*
Este fichero es donde configuraremos las rutas de la aplicación.

const routes: Routes = [];
*/
const routes: Routes = [
    {
      path : '', //En este caso decimos el componente que mostraremos por defecto
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
    //Oficinas
    {
      path : 'oficinas', //cuando definimos el 'path' no puede empezar por '/'
      component : OficinasComponent
    },
    {path : 'oficinas/:id', component : OficinasComponent},
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
  