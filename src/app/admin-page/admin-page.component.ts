import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})
export class AdminPageComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  currentTab: number = 0;

  setCurrentTabValue(tabName: number) {
    this.currentTab = tabName;
  }
}
