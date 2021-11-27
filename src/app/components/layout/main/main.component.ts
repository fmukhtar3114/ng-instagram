import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() windowWidth;
  @Input() profileInfo = {
    userId: 'fmukhtar',
    userName: 'Fatima Khan',
    profilePhoto: 'assets/img/fmukhtar.jpg',
  };
  page = 1

  pageSize = 10
  userPostsInfo = []
  @Output() setClickProfileEvent = new EventEmitter();

  public sideStyle: any = {};
  isLoaded: boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  ngOnChanges() {
    const element = document.getElementById('igpost-main');
    if (!element)
      return
    if (element !== undefined && element !== null) {
      const leftPos = element.getBoundingClientRect().left + window.scrollX;
      this.sideStyle = { left: (leftPos + 642).toString() + 'px' };
    }
  }

  ngAfterViewInit(): void {
    const element = document.getElementById('igpost-main');
    if (!element)
      return
    const leftPos = element.getBoundingClientRect().left + window.scrollX;
    this.sideStyle = { left: (leftPos + 642).toString() + 'px' };
  }
  loadUsers() {
    this.userService.getUsers(this.pageSize, this.pageSize).subscribe(response => {
      this.userPostsInfo = response.results
      this.isLoaded = true
    })

  }
  onScroll() {

    this.page ++;
    this.userService.getUsers(this.page, this.pageSize).subscribe(response => {
      this.userPostsInfo = [...this.userPostsInfo,response.results]
      this.isLoaded = true
    })
  }




  public setClickProfile() {
    this.setClickProfileEvent.emit();
  }

}
