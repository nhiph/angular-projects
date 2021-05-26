import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { HighlightUpdateDirective } from './highlight-update.directive';
import { ButtonDirective } from './button.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    HighlightUpdateDirective,
    ButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    HighlightUpdateDirective,
    ButtonDirective
  ]
})
export class MyDirectiveModule { }
