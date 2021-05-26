import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-class',
  templateUrl: './directive-class.component.html',
  styleUrls: ['./directive-class.component.css']
})
export class DirectiveClassComponent implements OnInit {

  public status:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
