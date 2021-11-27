import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  @Input() profileInfo;

  public fetched: boolean = true;
  public stories = [];
  public styleTransform = [];
  public visibleStories= [];
  public imgUrl: string = '/assets/img/userdata/';
  public storyIndex: number = 0;

  constructor() {}

  ngOnInit(): void {


  }

  public clickPrevStory(): void {
    if (this.storyIndex > 3) {
      this.storyIndex = this.storyIndex - 4;
    }
    this.visibleStories = this.populateVisibleStories();
  }

  public clickNextStory(): void {
    if (this.stories.length > this.storyIndex + 7) {
      this.storyIndex = this.storyIndex + 4;
    }
    this.visibleStories = this.populateVisibleStories();
  }

  private populateVisibleStories(): any {
    const uptoIndex =
      this.stories.length > this.storyIndex + 8
        ? this.storyIndex + 8
        : this.stories.length;

    let tempStories = [];
    for (let i = this.storyIndex; i < uptoIndex; i++) {
      tempStories.push(this.stories[i]);
    }

    return tempStories;
  }

  private createStyle(): void {
    this.stories.map((story, index) => {
      this.styleTransform.push({
        transform: 'translateX(' + 80 * index + 'px)',
      });
    });
  }
}
