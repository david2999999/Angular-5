import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});

    // the data.json is only firebase specific, this basically creates a json in the database
    return this.http.post('https://angular-udemy-course.firebaseio.com/data.json',
      servers, {headers: headers});
  }

  overrideServer(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});

    // in firebase, this will overwrite the existing data
    return this.http.put('https://angular-udemy-course.firebaseio.com/data.json',
      servers, {headers: headers});
  }

  getServers() {
    return this.http.get('https://angular-udemy-course.firebaseio.com/data')
      .pipe( map((response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }

          return data;
        }
      )).pipe( catchError((error: Response) => {
        return throwError('Something went wrong!');
      }
    ));

    // return this.http.get('https://angular-udemy-course.firebaseio.com/data').
    //    map((response: Response) => {
    //       const data = response.json();
    //       for (const server of data) {
    //         server.name = 'FETCHED_' + server.name;
    //       }
    //       return data;
    //     }
    //   ).catch((error: Response) => {
    //       console.log(error);
    //       return Observable.throw(error);
    //     }
    //   );
  }
}
