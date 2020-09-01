import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {

  actualSection : string; 

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe(val=>{
      this.actualSection = this.router.url;
    });
  }

}
