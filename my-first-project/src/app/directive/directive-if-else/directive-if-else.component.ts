import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-if-else',
  templateUrl: './directive-if-else.component.html',
  styleUrls: ['./directive-if-else.component.css']
})
export class DirectiveIfElseComponent implements OnInit {

  public status:boolean = true;
  public thongBao:string = "";

  constructor() { }

  dangXuat(){
    this.status = !this.status;
  }

  DangNhap(email:string, pass:string){
    if(email == "cybersoft@gmail.com" && pass == "123456"){
      this.status = true;
    }else{
      this.status = false;
      this.thongBao = "Email hoac Password chua chinh xac!"
    }
  }

  ngOnInit(): void {
  }

}
