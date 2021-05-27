import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.css']
})
export class TinTucComponent implements OnInit {

  loaiTinTuc:string="DienAnh"

  ChonLoaiTin(val:string){
    this.loaiTinTuc = val;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
