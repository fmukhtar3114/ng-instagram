import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { BrandComponent } from './components/layout/header/brand/brand.component';
import { ActivityComponent } from './components/layout/header/icons/activity/activity.component';
import { DirectComponent } from './components/layout/header/icons/direct/direct.component';
import { ExploreComponent } from './components/layout/header/icons/explore/explore.component';
import {  HomeIconComponent } from './components/layout/header/icons/home/home-icon.component';
import { IconsComponent } from './components/layout/header/icons/icons.component';
import { SearchComponent } from './components/layout/header/search/search.component';
import { SearchSuggestionComponent } from './components/layout/header/search/search-suggestion/search-suggestion.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/layout/header/icons/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeComponent } from './components/pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BrandComponent,
    ActivityComponent,
    DirectComponent,
    ExploreComponent,
    HomeIconComponent,
    IconsComponent,
    SearchComponent,
    SearchSuggestionComponent,
    ProfileComponent,
    PostComponent,
    MainComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
