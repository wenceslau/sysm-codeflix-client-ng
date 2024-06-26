import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SearchComponent} from "./pages/search/search.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";
import {PlayerComponent} from "./pages/player/player.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: []
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: []
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: []
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: []
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: []
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: []
  },
  {
    path: 'player/:id',
    component: PlayerComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
