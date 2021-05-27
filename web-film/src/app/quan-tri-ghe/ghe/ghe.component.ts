import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  status:boolean = false;

  @Input() itemGhe:any;

  constructor() { }

  datGhe(){
    if(this.status){
      this.status = false;
    }
    else{
      this.status = true;
    }
    this.emitStatus.emit(this.status);
  }
  @Output() emitStatus = new EventEmitter();

  ngOnInit(): void {
  }

}
