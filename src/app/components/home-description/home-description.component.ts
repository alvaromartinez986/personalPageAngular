import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-description',
  templateUrl: './home-description.component.html',
})
export class HomeDescriptionComponent implements OnInit {

  backgroundImage: String = "assets/img/alvaro1.png";

  constructor() { }

  ngOnInit() {
  }

}
