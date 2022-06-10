import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer')
  drawer?: MatDrawer;

  @Input()
  public toggled = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  public openSide(): void {
    this.drawer?.toggle();
  }
  
}
