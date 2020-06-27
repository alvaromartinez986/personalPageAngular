import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-showcase',
  templateUrl: './header-showcase.component.html',
})
export class HeaderShowcaseComponent implements OnInit {

  backgroundImage: String = "assets/img/alvaro1.png";

  constructor() { }

  ngOnInit() {
  }

}
