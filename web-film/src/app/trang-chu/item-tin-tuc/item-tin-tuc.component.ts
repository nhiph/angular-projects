import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-tin-tuc',
  templateUrl: './item-tin-tuc.component.html',
  styleUrls: ['./item-tin-tuc.component.css']
})
export class ItemTinTucComponent implements OnInit {

  @Input() Tin:any;

  constructor() { }

  ngOnInit(): void {
  }

}
