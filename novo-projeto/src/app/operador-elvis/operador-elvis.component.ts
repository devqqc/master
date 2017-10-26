import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss']
})
export class OperadorElvisComponent implements OnInit {

  tarefa : any = {
    descricao : 'Descrição da tarefa',
    responsavel : {
      usuario : {
        nome : 'Otávio'
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}