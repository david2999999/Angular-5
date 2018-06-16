import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import {Observable} from 'rxjs/Observable';
import * as fromAuth from '../../auth/ngrx-store/auth.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit{
  authState: Observable<fromAuth.State>;

  constructor(private dataStorageServer: DataStorageService,
              public authService: AuthService,
              private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageServer.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
        // listen to the event of sent and respond
        // (response: HttpEvent<Object>) => {
        //   console.log(response.type === HttpEventType.Sent);
        // }
      );
  }

  onFetchData() {
    this.dataStorageServer.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
