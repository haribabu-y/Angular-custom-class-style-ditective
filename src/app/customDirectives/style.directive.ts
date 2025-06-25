import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input('appStyle') set style(elementStyles: Object) {
    let styleEntries = Object.entries(elementStyles);
    console.log(styleEntries);
    for(let item of styleEntries) {
      let[styleName, styleValue] = item;
      console.log(styleName, styleValue);      
      this.renderer.setStyle(this.element.nativeElement, styleName, styleValue);
    }
  };

}
