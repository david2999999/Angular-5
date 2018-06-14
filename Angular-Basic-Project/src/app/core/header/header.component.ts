import {Component} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import {AuthService} from '../../auth/auth.service';

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
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageServer.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
