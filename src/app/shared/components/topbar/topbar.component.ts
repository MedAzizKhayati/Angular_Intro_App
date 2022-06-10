import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  sideNavToggled = false;

  constructor() { }

  ngOnInit(): void {

  }

  toggleSide(): void {
    this.sideNavToggled = !this.sideNavToggled;
  }
}
