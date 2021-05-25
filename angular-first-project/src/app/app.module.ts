import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HeaderComponent } from './trang-chu/header/header.component';
import { IndexComponent } from './trang-chu/index/index.component';
import { FooterComponent } from './trang-chu/footer/footer.component';
import { SliderComponent } from './trang-chu/index/slider/slider.component';
import { ContentComponent } from './trang-chu/index/content/content.component';
import { ItemComponent } from './trang-chu/index/content/item/item.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    SliderComponent,
    ContentComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
