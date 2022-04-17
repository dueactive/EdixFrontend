import { Component, OnInit } from "@angular/core";
import { OficinasService } from "../../services/oficinas.service";
import { NgForm } from "@angular/forms";
import { Oficinas } from "../../models/oficinas";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-oficinas",
  templateUrl: "./oficinas.component.html",
  styleUrls: ["./oficinas.component.css"],
  providers: [OficinasService],
})
export class OficinasComponent implements OnInit {

  idOficina: string = ''

  constructor(private oficinasService: OficinasService ,private route : ActivatedRoute) {
    
  }

  ngOnInit() {

    this.idOficina = this.route.snapshot.params["id"]
    //this.getOficinas();
  //this.postEmployeeByoptions("")
    //this.getOficinaByid(this.idOficina);
    this.getOficinaByid(this.idOficina);
  }

  

  getOficinas() {
    this.oficinasService.getOficinas().subscribe((res) => {
      this.oficinasService.oficinas = res;
    });
  }

  postOficinasByoptions(nombre: string) {
    this.oficinasService.postOficinasByoptions(nombre).subscribe((res) => {
      this.oficinasService.oficinas = res;
    });
  }

  getOficinaByid(_id: string) {
    this.oficinasService.getOficinaByid(_id).subscribe((res) => {
      this.oficinasService.nuevoOficina = res;

      
    });
  }

 
}
