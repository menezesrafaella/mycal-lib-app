import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdd-angular',
  templateUrl: './tdd-angular.component.html',
  styleUrls: ['./tdd-angular.component.css']
})
export class TddAngularComponent implements OnInit {

  test = "hello"

  constructor() { }

  myMethod(){
    this.test = "world"
  }

  ngOnInit(): void {
  }

}
