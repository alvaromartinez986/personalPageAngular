import { Component, OnInit } from "@angular/core";
import { Project } from "./project.model";

@Component({
  selector: "app-time-line",
  templateUrl: "./time-line.component.html",
})
export class TimeLineComponent implements OnInit {
  projects: Array<Project>;
  projectActiveIndex: number;
  flagChange: boolean;

  constructor() {
    this.flagChange = true;

    this.projects = [
      {
        date: "April 2015 - April 2016",
        title: "SCGD - Sudo",
        description:
          "Description: Project to manage a documentation for internal processes in the organization.",
        functions:
          "Support and maintenance of old functionalities, creation of new functionalities, presentations with the client to show the new features of the application, deploy and versioning the application, estimate the time for the development tasks",
        technologies: "PHP, Symfony, Javascript, JQuery, CSS. HTML",
        icon: "far fa-file-alt",
      },
      {
        date: "April 2016 - October 2017",
        title: "Dais - Sudo",
        description:
          "Project to audit the database oif all system of the organization",
        functions:
          "Support and maintenance of old functionalities, creation of new functionalities, presentations with the client to show the new features of the application, deploy and versioning the application, estimate the time for the development tasks",
        technologies:
          "PHP, Symfony, Javascript, Angular, Typescript, CSS. HTML",
        icon: "fas fa-database",
      },
      {
        date: "October 2017 - July 2020 ",
        title: "Connect - Cafeto",
        description:
          "Connect is a customer support portal connected with external Api's to manage all clients requirements.",
        functions:
          "Deployment of new functionalities into Acquia server, creation of new functionalities (forms, content, sections), design and create a proof of concept of a migration to a new technologies (Drupal 8 and React), develop and design of the new customer support section",
        technologies:
          "PHP, Javascript, JQuery, CSS, Less, Drupal 7, Drupal 8, React",
        icon: "far fa-question-circle",
      },
      {
        date: "July 2020 -  October 2020 ",
        title: "Greetbox - Cafeto",
        description:
          "Mobile application to create custom cards in a social network.",
        functions:
          "Deployment of new functionalities into the playstore, creation of new screens, forms and functionalities, estimate the time for the development tasks, design the new functionalities, create unit test for new functionalities, develop in less of two months a first beta version of the application with three developers",
        technologies:
          "React, React-native, Redux, Thunk, Sagas, Javascript, Jest",
        icon: "far fa-id-card",
      },
      {
        date: "Feb 2021 - Feb 2022 ",
        title: "Catsup - Cafeto",
        description: "Web application to track the time for activities.",
        functions:
          "Teach to the juniors developers good practices of development, develop new functionalities, propose the architecture of the application",
        technologies: "Nest, React, Vue, Javascript, Quasar, Typescript",
        icon: "fas fa-stopwatch",
      },
      {
        date: "Feb 2022 - July 2023 ",
        title: "Evolve",
        description:
          "Start up of an application for mechanical, electrical and plumbering industries to automate design and fabrication process",
        functions:
          "Create multiple interactive (Drag and drop libraries, complex data‑grids) modules with unit test (80% coverage)",
        technologies:
          "React, Javascript, ApolloGraphQL, Typescript, Amplify, App sync, MUI, React testing library, Cypress",
        icon: "fas fa-microchip",
      },
    ].reverse();

    this.projectActiveIndex = 0;
  }

  ngOnInit() {}

  changeProject(direction: number) {
    this.flagChange = false;

    setTimeout(() => {
      this.flagChange = true;
      let nextIndex = this.projectActiveIndex + direction;
      this.projectActiveIndex =
        nextIndex < 0 || nextIndex == this.projects.length
          ? this.projectActiveIndex
          : nextIndex;
    }, 900);
  }
}
