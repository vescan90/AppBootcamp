import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  sideBarOpen = false;
  constructor() {}

  ngOnInit(): void {}
  sideBarToggler(event:any) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
