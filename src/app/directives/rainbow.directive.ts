import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor() { }
  @HostBinding('style.color') color;
  @HostBinding('style.borderColor') bc;

  @HostListener('keyup') onKeyUp() {
    const color = this.getRandomColor();
    console.log(color);
    this.bc = color;
    this.color = color;
  }
  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
