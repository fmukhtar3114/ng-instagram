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

  userPostsInfo = []
  @Output() setClickProfileEvent = new EventEmitter();

  public sideStyle: any = {};

  constructor(private userService  :UserService) {}

  ngOnInit(): void {
    this.loadUsers()
  }

  ngOnChanges() {
    const element = document.getElementById('igpost-main');

    if (element !== undefined && element !== null) {
      const leftPos = element.getBoundingClientRect().left + window.scrollX;
      this.sideStyle = { left: (leftPos + 642).toString() + 'px' };
    }
  }

  ngAfterViewInit(): void {
    const element = document.getElementById('igpost-main');
    const leftPos = element.getBoundingClientRect().left + window.scrollX;
    this.sideStyle = { left: (leftPos + 642).toString() + 'px' };
  }
  loadUsers(){
    this.userService.getUsers(1,2).subscribe(response=>{
     this.userPostsInfo = response.results

    })
  }





  public setClickProfile() {
    this.setClickProfileEvent.emit();
  }

}
