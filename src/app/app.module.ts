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
import { PostHeaderComponent } from './components/post/post-header/post-header.component';
import { AddCommentComponent } from './components/post/description/add-comment/add-comment.component';
import { CaptionbarComponent } from './components/post/description/captionbar/captionbar.component';
import { CommentbarComponent } from './components/post/description/commentbar/commentbar.component';
import { IconbarComponent } from './components/post/description/iconbar/iconbar.component';
import { LikebarComponent } from './components/post/description/likebar/likebar.component';
import { TimebarComponent } from './components/post/description/timebar/timebar.component';
import { DescriptionComponent } from './components/post/description/description.component';
import { SidepanelComponent } from './components/layout/main/sidepanel/sidepanel.component';
import { SideProfileComponent } from './components/layout/main/sidepanel/side-profile/side-profile.component';
import { SideStoryComponent } from './components/layout/main/sidepanel/side-story/side-story.component';
import { SuggestionRowComponent } from './components/layout/main/sidepanel/suggestion/suggestion-row/suggestion-row.component';
import { StoryComponent } from './components/layout/main/story/story.component';
import { StoryRowComponent } from './components/layout/main/sidepanel/side-story/story-row/story-row.component';
import { SuggestionComponent } from './components/layout/main/sidepanel/suggestion/suggestion.component';
import { PostListComponent } from './components/post/post-list/post-list.component';

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
    PostHeaderComponent,
    AddCommentComponent,
    CaptionbarComponent,
    CommentbarComponent,
    IconbarComponent,
    LikebarComponent,
    TimebarComponent,
    DescriptionComponent,
    SidepanelComponent,
    SideProfileComponent,
    SideStoryComponent,
    SuggestionRowComponent,
    StoryComponent,
    StoryRowComponent,
    SuggestionComponent,
    PostListComponent
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
