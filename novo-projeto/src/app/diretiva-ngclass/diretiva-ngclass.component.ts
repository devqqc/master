import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.scss']
})
export class DiretivaNgclassComponent implements OnInit {

  favorito: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  favoritar(){
    this.favorito = !this.favorito;
  }

}
