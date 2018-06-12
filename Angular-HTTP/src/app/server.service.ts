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
    // using .pipe() because of Angular CLI 6+ without rxjs-compact
    return this.http.get('https://angular-udemy-course.firebaseio.com/data.json')
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

    // just an example if not using angular CLI 6+
    // return this.http.get('https://angular-udemy-course.firebaseio.com/data.json').
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

  getAppName() {
    return this.http.get('https://angular-udemy-course.firebaseio.com/data/appName.json')
      .pipe(map(
        (response: Response) => {
          return response.json();
        }
      ));
  }
}
