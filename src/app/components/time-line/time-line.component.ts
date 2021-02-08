import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html'
})
export class TimeLineComponent implements OnInit {

  projects: Array<Project>;
  projectActiveIndex: number;
  flagChange: boolean;


  constructor() {

    this.flagChange = true;

    this.projects = [{
      date: 'April 2015 - April 2016',
      title: 'Sifi',
      description: 'lorem ipsuim ipsuimipsuimipsuimipsuim',
      technologies: 'JS, html, Angular ',
      image: '',
    }, {
      date: 'April 2016 - April 2017',
      title: 'Sipais',
      description: 'lorem ipsuim ipsuimipsuimipsuimipsuim',
      technologies: 'JS, html, Angular ',
      image: '',
    }];

    this.projectActiveIndex = 0;


  }

  ngOnInit() {
  }

  changeProject(direction: number) {
    this.flagChange = false;

    setTimeout(() => {
      this.flagChange = true;
      let nextIndex = this.projectActiveIndex + direction;
      this.projectActiveIndex = ((nextIndex < 0) || (nextIndex == this.projects.length)) ?
        this.projectActiveIndex : nextIndex;
    }, 900);


  }

}
