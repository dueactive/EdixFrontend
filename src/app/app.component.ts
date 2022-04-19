import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "./services/employee.service";
import { NgForm } from "@angular/forms";
import { Employee } from "./models/employee";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  usuarioRegistrado: string;
  
  constructor(private employeeService: EmployeeService, private router: Router) {}
  title = 'EdixFrontend';

  ngOnInit() {
    let modal = document.getElementById("login");
    let modalMantenimiento = document.getElementById("mantenimiento");
    modalMantenimiento.style.display = "none";
    this.usuarioRegistrado=sessionStorage.getItem("tokenSession");
    if(this.usuarioRegistrado){
        modal.style.display = "none";
        modalMantenimiento.style.display = "inline";
    }
  }

  public signUp(){
    let modal = document.getElementById("login");
    let modalMantenimiento = document.getElementById("mantenimiento");
    sessionStorage.removeItem("tokenSession");
    sessionStorage.clear();
    modal.style.display = "inline";
    modalMantenimiento.style.display = "none";
    this.router.navigateByUrl('/');
  }

  public formularioContacto(){
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
   
  }

  public ocultarformularioContacto(){
   let  modal = document.getElementById("myModal");
    modal.style.display = "none";
   
  }

  addFormularioContacto(form?: NgForm) {
    if (form.value._id) {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.ocultarformularioContacto();
   
      });
    } else {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.ocultarformularioContacto();
      });
    }
  }
}
