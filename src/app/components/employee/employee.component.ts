import { Component, OnInit } from "@angular/core";

import { EmployeeService } from "../../services/employee.service";
import { NgForm } from "@angular/forms";

import { Employee } from "../../models/employee";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
  providers: [EmployeeService],
})

export class EmployeeComponent implements OnInit {



  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    //this.getEmployees();
    this.getEmployeeByname("")
    this.getEmployeeByid("6242fd505832d232a00b45c7");
  }


  addEmployee(form?: NgForm) {
    if (form.value._id) {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEmployees();
      });
    } else {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeService.employees = res;
    });
  }

  getEmployeeByname(nombre: string) {
    this.employeeService.getEmployeeByname(nombre).subscribe((res) => {
      this.employeeService.employees = res;
    });
  }

  getEmployeeByid(_id: string) {
    this.employeeService.getEmployeeByid(_id).subscribe((res) => {
      this.employeeService.nuevoEmp = res;
    });
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }


  loginEmployee(employee: Employee){
    this.employeeService.token="RR";
    this.employeeService.loginEmployee(employee).subscribe(
      res => {
        this.employeeService.token="HH";
        this.employeeService.token = res.token;
   
    });
  }

  deleteEmployee(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
