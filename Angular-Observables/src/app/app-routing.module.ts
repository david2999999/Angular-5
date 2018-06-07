import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

const appRoutes = [
  { path: '', component: HomeComponent},
  { path: 'user/:id', component: UserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
