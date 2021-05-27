import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.css']
})
export class ItemPhimComponent implements OnInit {

  @Input() ItemPhim:any;
  // Phim duoc truyen tu cha vao, nhu truyen props

  constructor() { }

  ngOnInit(): void {
  }

}
