import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input() userPostsInfo;
  postDetail : any = []


  constructor() {}

  ngOnInit(): void {
    this.buildPostDetails()
  }
  buildPostDetails(){
    for(var i =0; i<this.userPostsInfo.length ; i++){
      let tempObj ={
        likes : [],
        postId:i+1,
        caption : 'Lorem Ispum',
        postBy : this.userPostsInfo[i].name.first+ " "+this.userPostsInfo[i].name.last,
        comments : [],
        postTime:new Date().toDateString(),
        loginUser:this.userPostsInfo[i].email
      }
      this.postDetail.push(tempObj)
    }
  }
}
