import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyBkgEpsAb17hBIDcj9jRq18zlMF7L9e2AY',
      authDomain: 'angular-udemy-course.firebaseapp.com'
    });
  }
}
