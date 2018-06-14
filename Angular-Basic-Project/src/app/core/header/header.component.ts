import {Component} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import {AuthService} from '../../auth/auth.service';
import {HttpEvent, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {

  constructor(private dataStorageServer: DataStorageService, public authService: AuthService) {}

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
