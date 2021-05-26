import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightUpdate]'
})
export class HighlightUpdateDirective implements OnInit{

  constructor(private El:ElementRef, private renderer2:Renderer2) { }

  ngOnInit(){
    this.renderer2.setStyle(this.El.nativeElement, "background-color", "blue");
    this.renderer2.appendChild(this.El.nativeElement, "cybersoft");
    let content = this.renderer2.createText("nhi cute cybersoft");
    this.renderer2.appendChild(this.El.nativeElement, content);
  }
}
