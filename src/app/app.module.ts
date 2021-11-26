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
import { HomeComponent } from './components/layout/header/icons/home/home.component';
import { IconsComponent } from './components/layout/header/icons/icons.component';
import { SearchComponent } from './components/layout/header/search/search.component';
import { SearchSuggestionComponent } from './components/layout/header/search/search-suggestion/search-suggestion.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/layout/header/icons/profile/profile.component';

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
    HomeComponent,
    IconsComponent,
    SearchComponent,
    SearchSuggestionComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
