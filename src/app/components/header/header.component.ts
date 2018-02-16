import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HeaderComponent implements OnInit {

  title = 'Eureka!';
  
  constructor() { }

  ngOnInit() {
  }

}
