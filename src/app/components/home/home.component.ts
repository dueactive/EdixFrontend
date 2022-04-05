import { Component, OnInit } from '@angular/core';
import { OficinasService } from "../../services/oficinas.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OficinasService],
})
export class HomeComponent implements OnInit {

  constructor(private oficinasService: OficinasService) { }

  ngOnInit() {
    this.getOficinas();
  }



  getOficinas() {
    this.oficinasService.getEOficinas().subscribe((res) => {
      this.oficinasService.oficinas = res;
    });
  }

  getOficinaByname(nombre: string) {
    this.oficinasService.getOficinaByname(nombre).subscribe((res) => {
      this.oficinasService.oficinas = res;
    });
  }



}
