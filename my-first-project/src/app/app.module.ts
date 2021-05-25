import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnewayModule } from './oneway/oneway.module';
import { BaiTapBindingComponent } from './bai-tap-binding/bai-tap-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectiveModule } from './directive/directive.module';

@NgModule({
  declarations: [
    AppComponent,
    BaiTapBindingComponent
  ],
  imports: [
    BrowserModule,
    OnewayModule,
    FormsModule,
    DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
