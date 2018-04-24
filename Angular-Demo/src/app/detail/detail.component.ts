import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail = false;
  numberOfTimesClicked = [];
  number = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleDetail() {
    this.detail = !this.detail;
    this.numberOfTimesClicked.push(++this.number);

  }

  toggle() {
    return this.detail === true ? 'block' : 'none';
  }

  fiveOrMore() {
    return this.numberOfTimesClicked.length === 5 ? 'deepskyblue' : 'transparent';
  }
}
