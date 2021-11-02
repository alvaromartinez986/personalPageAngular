import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html'
})
export class HeaderContentComponent implements OnInit {

  roles: string[];
  actualRoleIndex: number;
  actualRole: string;
  isDeleting: boolean;
  wait : number;

  constructor() {
    this.roles = ['Javascript Developer', 'React Developer', 'Front-end Developer'];
    this.actualRoleIndex = 0;
    this.actualRole = '';
    this.isDeleting = false;
    this.wait = 300;
  }

  ngOnInit() {
    setTimeout(()=>  this.typeWriterRole(), 2000);
  }

  typeWriterRole(){
    const current = this.actualRoleIndex % this.roles.length;
    const fullTxt = this.roles[current];

    if(this.isDeleting){
      this.actualRole = fullTxt.substring(0, this.actualRole.length-1);
    }else{
      this.actualRole = fullTxt.substring(0, this.actualRole.length+1);
    }

    let typeSpeed = 300;

    if(this.isDeleting){
      typeSpeed/=3;
    }

    if(!this.isDeleting && this.actualRole === fullTxt){
      typeSpeed = this.wait;
      this.isDeleting = true;
    }else if (this.isDeleting && this.actualRole === ''){
      this.isDeleting = false;
      this.actualRoleIndex++;
      typeSpeed = 500;
    }

    setTimeout (()=> this.typeWriterRole(), typeSpeed);
  }

}
