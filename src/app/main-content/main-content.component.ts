import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  layoutGap: String = '25px';
  buttonHeight: String = '50px';

  constructor() { }

  ngOnInit() {
  }

}
