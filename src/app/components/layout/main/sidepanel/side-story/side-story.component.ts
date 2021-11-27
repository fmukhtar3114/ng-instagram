import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-story',
  templateUrl: './side-story.component.html',
  styleUrls: ['./side-story.component.css'],
})
export class SideStoryComponent implements OnInit {
  public fetched: boolean = true;
  public watchAll: boolean = false;
  public dispStories = [];
  public imgUrl: string = '/assets/img/userdata/';
  public stories= [];

  constructor() {}

  ngOnInit(): void {

  }

  public handleWatchAll = () => {
    this.watchAll = !this.watchAll;
    this.dispStories = this.getStories();
  };

  private getStories = () => {
    if (this.watchAll) {
      return this.stories;
    } else {
      let storyList = [];
      const uptoIndex = this.stories.length > 8 ? 8 : this.stories.length;

      for (let i = 0; i < uptoIndex; i++) {
        storyList.push(this.stories[i]);
      }
      return storyList;
    }
  };
}
