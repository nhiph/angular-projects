import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirectiveIfElseComponent } from './directive-if-else/directive-if-else.component';
import { DirectiveSwitchComponent } from './directive-switch/directive-switch.component';
import { DirectiveForComponent } from './directive-for/directive-for.component';
import { DirectiveClassComponent } from './directive-class/directive-class.component';
import { MyDirectiveModule } from '../my-directive/my-directive.module';



@NgModule({
  declarations: [
    DirectiveIfComponent,
    DirectiveIfElseComponent,
    DirectiveSwitchComponent,
    DirectiveForComponent,
    DirectiveClassComponent
  ],
  imports: [
    CommonModule,
    MyDirectiveModule
  ],
  exports: [
    DirectiveIfComponent,
    DirectiveIfElseComponent,
    DirectiveSwitchComponent,
    DirectiveForComponent,
    DirectiveClassComponent
  ]
})
export class DirectiveModule { }
