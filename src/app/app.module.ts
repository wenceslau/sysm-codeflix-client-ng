import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavLinksComponent } from './components/nav-links/nav-links.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import {FormsModule} from "@angular/forms";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BannerComponent } from './components/banner/banner.component';
import {NgOptimizedImage} from "@angular/common";
import { MovieRowComponent } from './components/movie-row/movie-row.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { PlayerComponent } from './pages/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LogoComponent,
    NavLinksComponent,
    SearchFormComponent,
    UserProfileComponent,
    BannerComponent,
    MovieRowComponent,
    MovieCardComponent,
    MovieInfoComponent,
    MovieRatingComponent,
    SearchComponent,
    LoginComponent,
    AuthFormComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
