import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { FormLienHeComponent } from './form-lien-he/form-lien-he.component';
import { HeaderComponent } from './header/header.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ReviewComponent } from './review/review.component';
import { SliderComponent } from './slider/slider.component';
import { ThongTinLienHeComponent } from './thong-tin-lien-he/thong-tin-lien-he.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { TrangChuComponent } from './trang-chu.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';



@NgModule({
  declarations: [
    DienAnhComponent,
    FormLienHeComponent,
    HeaderComponent,
    ItemPhimComponent,
    KhuyenMaiComponent,
    LienHeComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ReviewComponent,
    SliderComponent,
    ThongTinLienHeComponent,
    TinTucComponent,
    ItemTinTucComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DienAnhComponent,
    FormLienHeComponent,
    HeaderComponent,
    ItemPhimComponent,
    KhuyenMaiComponent,
    LienHeComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ReviewComponent,
    SliderComponent,
    ThongTinLienHeComponent,
    TinTucComponent,
    ItemTinTucComponent
  ]
})
export class TrangChuModule { }
