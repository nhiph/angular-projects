import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-binding',
  templateUrl: './bai-tap-binding.component.html',
  styleUrls: ['./bai-tap-binding.component.css']
})
export class BaiTapBindingComponent implements OnInit {

  public email:string="phunghuynhnhi797@gmail.com";
  public fullname:string="Phung Huynh Nhi";

  constructor() { }

  ChangeFullName(fullName:string){
    this.fullname = fullName;
  }

  ngOnInit(): void {
  }

}
