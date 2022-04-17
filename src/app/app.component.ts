import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "./services/employee.service";
import { NgForm } from "@angular/forms";
import { Employee } from "./models/employee";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  
  constructor(private employeeService: EmployeeService) {}
  title = 'EdixFrontend';

  ngOnInit() {

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
