import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-for',
  templateUrl: './directive-for.component.html',
  styleUrls: ['./directive-for.component.css']
})
export class DirectiveForComponent implements OnInit {

  public DanhSachSinhVien:Array<any> = [
    {MaSV: "01", HoTen: "Nguyen Van A", Tuoi: 15},
    {MaSV: "02", HoTen: "Nguyen Van B", Tuoi: 15},
    {MaSV: "03", HoTen: "Nguyen Van C", Tuoi: 15},
    {MaSV: "04", HoTen: "Nguyen Van D", Tuoi: 15},
    {MaSV: "05", HoTen: "Nguyen Van E", Tuoi: 15},
  ];

  constructor() { }

  ThemSinhVien(MaSV:string, HoTen:string, Tuoi:string){
    this.DanhSachSinhVien.push(
      {MaSV: MaSV, HoTen: HoTen, Tuoi: Tuoi}
    )
  }

  ngOnInit(): void {
  }

}
