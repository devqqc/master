import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-propeties.component.html',
  styleUrls: ['./output-propeties.component.css']
})
export class OutputPropetiesComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new  EventEmitter();

  @ViewChild('elementoInput') elementoInput : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  incrementar(){
    this.elementoInput.nativeElement.value++;
    console.log(this.elementoInput.nativeElement.value);
    //this.valor++;
    //this.mudouValor.emit({ novoValor:this.valor});
  }

  decrementar(){
    this.elementoInput.nativeElement.value--;
    console.log(this.elementoInput.nativeElement.value);
    //this.valor--;
    //this.mudouValor.emit({ novoValor:this.valor});
  }
}
