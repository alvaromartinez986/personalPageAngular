import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html'
})
export class AboutSectionComponent implements OnInit {

  imgAbout : string; 

  constructor() {
    this.imgAbout = "assets/img/alvaro2.png";
  }

  ngOnInit() {
  }

}
