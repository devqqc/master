import { element } from 'protractor';
import { Directive,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: 'h4[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef : ElementRef,private _renderer : Renderer) { 
    //desta forma vc acessa diretament o dom(forma errada)
    //_elementRef.nativeElement.style.backgroundColor = 'yellow';
    _renderer.setElementStyle(_elementRef.nativeElement,'background-color','yellow');

  }

}
