import { Injectable } from '@angular/core';
import {reject} from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  // basically fakes 800ms to finish the task
  isAuthenticated() {
    const promise = new Promise(
      (resolve) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );

    return promise;
  }
}
