import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // emit value in sequence every 1 second
    const myNumbers = Observable.interval(1000);

    // output: 0,1,2,3,4,5....
    myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
  }

}
