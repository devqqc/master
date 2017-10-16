import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.scss']
})
export class DiretivaNgswitchComponent implements OnInit {

  tabSelecionada: string = 'home';
  
  constructor() { }

  ngOnInit() {
  }

}
