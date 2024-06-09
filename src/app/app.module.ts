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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LogoComponent,
    NavLinksComponent,
    SearchFormComponent,
    UserProfileComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [
    provideClientHydration()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
