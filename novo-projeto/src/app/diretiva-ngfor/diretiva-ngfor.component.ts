import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.scss']
})
export class DiretivaNgforComponent implements OnInit {

  cursos: string[] = ["Angular", "Java", "Android"];

  constructor() { }

  ngOnInit() {
  }

}
