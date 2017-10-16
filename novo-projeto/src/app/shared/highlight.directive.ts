import { Directive,HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input('colorDefault') colorDefault = 'white';
  @Input('highlight') colorPrimary = 'blue';

  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('mouseenter') onMouseMove(){
    this.backgroundColor = this.colorPrimary;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.colorDefault;
  }

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.colorDefault;
  }


}
