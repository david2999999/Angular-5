import {NgModule} from '@angular/core';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {AuthGuardService} from './auth-guard.service';
import {CanDeactivateGuardService} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';

// the AuthGuardService protect the route depending if "loggedIn" is true
// canActivate is for routes
// while canActivateChild is for the child routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent}
    ]},
  { path: 'servers',
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent},
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService]}
    ]},
  // { path: 'not-found', component: PageNotFoundComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page Not Found'}},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
