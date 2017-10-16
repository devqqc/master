import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  mostrarCursos: boolean;
  cursos: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  clickMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
