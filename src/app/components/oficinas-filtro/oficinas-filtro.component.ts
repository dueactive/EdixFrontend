import { Component, OnInit } from '@angular/core';
import { OficinasService } from "../../services/oficinas.service";
import { NgForm } from "@angular/forms";
import { Oficinas } from "../../models/oficinas";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oficinas-filtro',
  templateUrl: './oficinas-filtro.component.html',
  styleUrls: ['./oficinas-filtro.component.css']
})
export class OficinasFiltroComponent implements OnInit {
  typeOficina: string = ''
  oficina=new Oficinas();
  constructor(private oficinasService: OficinasService ,private route : ActivatedRoute) { }

  ngOnInit() {
    this.typeOficina = this.route.snapshot.params["modality"]
  }

  postOficinasByoptions(form?: NgForm) {

    this.oficina=form.value;
    this.oficina.modality=this.typeOficina;
 
    this.oficinasService.postOficinasByoptions(this.oficina).subscribe((res) => {
      if (this.typeOficina=="Alquiler"){
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

}
