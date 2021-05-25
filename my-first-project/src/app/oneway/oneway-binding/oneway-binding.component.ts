import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.css']
})
export class OnewayBindingComponent implements OnInit {

  public name:string = "Phung Huynh Nhi";
  public hocVien:any = {hoTen: "Cao Nguyen Binh", gioiTinh: "nam"};

  constructor() { }

  ChangeName(onInp:any){
    this.hocVien.hoTen = onInp.value;
  }

  ngOnInit(): void {
  }

}
