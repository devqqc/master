import { UtilidadesService } from './../utilidades/utilidades.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizada',
  templateUrl: './diretiva-customizada.component.html',
  styleUrls: ['./diretiva-customizada.component.scss']
})
export class DiretivaCustomizadaComponent implements OnInit {

  mostrarCursos: boolean;
  appName: string = "Sem nome";

  constructor(private utilidadesService: UtilidadesService) { }

  ngOnInit() {
    this.appName = this.utilidadesService.getAppName();
  }

  clickMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
