import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    // the data.json is only firebase specific, this basically creates a json in the database
    return this.http.post('https://angular-udemy-course.firebaseio.com/data.json', servers);
  }
}
