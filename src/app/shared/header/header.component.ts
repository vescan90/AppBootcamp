import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toogleSidebarForMe: EventEmitter<any> = new EventEmitter();
  UserLog = false;
  user: any;
  constructor() { }

  ngOnInit(): void {
  }
  toogleSideBar() {
    this.toogleSidebarForMe.emit();
  }
  logout() {}
}
