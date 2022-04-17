import { Component, OnInit } from "@angular/core";
import { OficinasService } from "../../services/oficinas.service";
import { NgForm } from "@angular/forms";
import { Oficinas } from "../../models/oficinas";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oficinasfiltro',
  templateUrl: './oficinasModality.component.html',
  styleUrls: ['./oficinasModality.component.css'],
  providers: [OficinasService],
})
export class OficinasModalityComponent implements OnInit {
  typeOficina: string = ''
  constructor(private oficinasService: OficinasService ,private route : ActivatedRoute) { }

  ngOnInit() {
    this.typeOficina = this.route.snapshot.params["modality"]
    
    this.getOficinaByModality(this.typeOficina);
  }

  getOficinaByModality(typeOficina: string) {
    this.oficinasService.getOficinaByModality(typeOficina).subscribe((res) => {
        if (typeOficina=="Alquiler"){
          var x = document.getElementById("Coworking");
          x.style.display="none";
          this.oficinasService.oficinasDestacadasAlquiler = res;
        } else {
          var x = document.getElementById("Alquiler");
          x.style.display="none";
          this.oficinasService.oficinasDestacadasCoworking = res;
        }
          
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
