import { Directive,HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mouseAzul]'
})
export class MouseAzulDirective {

  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('mouseenter') onMouseMove(){
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = 'white';
  }

  constructor() { }

}
