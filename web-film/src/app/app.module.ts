import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrangChuModule } from './trang-chu/trang-chu.module';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { QuanTriGheModule } from './quan-tri-ghe/quan-tri-ghe.module';

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent
  ],
  imports: [
    BrowserModule,
    TrangChuModule,
    QuanTriGheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
