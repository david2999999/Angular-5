import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup;

  // the $ means its an observable
  constructor(private actions$: Actions) {
  }
}
