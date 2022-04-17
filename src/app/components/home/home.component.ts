import { Component, OnInit } from "@angular/core";
import { OficinasService } from "../../services/oficinas.service";
import { NgForm } from "@angular/forms";
import { Oficinas } from "../../models/oficinas";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OficinasService],
})
export class HomeComponent implements OnInit {

  constructor(private oficinasService: OficinasService) {}

  ngOnInit() {
    this.getOficinasDestacadas("Alquiler");
    this.getOficinasDestacadas("Coworking");
    
  }


  getOficinas() {
    this.oficinasService.getOficinas().subscribe((res) => {
      this.oficinasService.oficinas = res;
    });
  }

  getOficinasDestacadas(modality: String) {
    this.oficinasService.getOficinasDestacadas(modality).subscribe((res) => {
      if (modality=="Alquiler"){
        this.oficinasService.oficinasDestacadasAlquiler = res;
      } else
        this.oficinasService.oficinasDestacadasCoworking = res;
    });
  }

}
