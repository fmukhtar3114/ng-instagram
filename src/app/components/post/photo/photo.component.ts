import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  @Input() postDetail;
  @Output() handleDoubleClickPhotoEvent = new EventEmitter();

  public imgUrl: string = 'https://picsum.photos/200';
  public photoIndex: number = 0;

  constructor() {
    this.photoIndex = 0;
  }

  ngOnInit(): void {}




}
