import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ServersService} from '../servers.service';
import {Injectable} from '@angular/core';

interface Server {
  id: number;
  name: string;
  status: string;
}

// this class basically loads in the data into a component before the view begins
// If you want the view to be loaded first before the data, you can load in the data
// from ngInit()
@Injectable()
export class ServerResolver implements Resolve<Server> {

  constructor(private serverService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serverService.getServer(+route.params['id']);
  }

}
