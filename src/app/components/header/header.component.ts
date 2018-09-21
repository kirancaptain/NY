import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks = [{
    label: 'Stats',
    path: 'stats'
  }, {
    label: 'Activity',
    path: 'activity'
  }]
  constructor() { }

  ngOnInit() {
  }

}
