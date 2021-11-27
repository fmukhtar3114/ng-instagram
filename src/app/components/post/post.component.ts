import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() postInfo
 postHeaderInfo:any={}
 @Input() postDetail
  constructor() { }

  ngOnInit(): void {
      this.postHeaderInfo.location = this.postInfo.location
      this.postHeaderInfo.name = this.postInfo.name
      this.postHeaderInfo.picture = this.postInfo.picture


  }

  public handleLikePost(e): void {
    let postDetail = { ...this.postDetail };
    const postId = this.postDetail.postId;
    const indexOfPostLiker = postDetail.likes.indexOf(postDetail.loginUser);

    indexOfPostLiker > -1
      ? postDetail.likes.splice(indexOfPostLiker, 1)
      : postDetail.likes.push(this.postDetail.loginUser);

    const params = {
      postId: postId,
      liked: indexOfPostLiker === -1,
    };

    this.postDetail = postDetail;
  }

}
