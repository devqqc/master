import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css'],
  inputs:[ 'professorCurso:professor']
})
export class InputPropertiesComponent implements OnInit {

  @Input('nome') nomeCurso: string = "";
  professorCurso: string = "";

  constructor() { }

  ngOnInit() {
  }

}
