import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
    `    
      .highlight {
        background: yellow;
        font-weight: bold;
      }
  `
  ]
})
export class DataBindingComponent implements OnInit {

  valorSalvo: string = "";
  textoInput: string = 'abc';
  nomeDoCurso: string = "Curso de Angular";
  professorDoCurso: string = "Loiane";
  
  url : string = "http://www.teleconsistemas.com.br";
  urlImagem : string = "http://lorempixel.com/400/200/sports/";
  isMouseFoco : boolean = false;

  constructor() {
   }

  ngOnInit() {
  }


  somar(numero1,numero2){
    return numero1 + numero2;
  }

  onClick(event){
    console.log(event);
  }

  onKeyUp(event : KeyboardEvent){
    console.log(event.key + ' - '  + (<HTMLInputElement>event.target).value);
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseMoveOut(){
    this.isMouseFoco = !this.isMouseFoco;
  }

  onMudouValorContador(event){
    console.log(event.novoValor);
  }

}
