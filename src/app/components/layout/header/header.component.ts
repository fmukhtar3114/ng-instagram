import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() profileInfo;
  @Input() clickNav;
  @Input() inbox;

  @Output() handleNavClickEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClickNav(param) {
    this.handleNavClickEvent.emit(param);
  }

}
