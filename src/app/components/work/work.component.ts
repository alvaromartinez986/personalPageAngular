import { Component, OnInit } from "@angular/core";
import { Work } from "../work-item/work.model";
import { WorkItemComponent } from "../work-item/work-item.component";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
})
export class WorkComponent implements OnInit {
  works: Array<Work>;

  constructor() {
    this.works = [
      {
        title: "SCGD",
        description: "Symfony page application",
        image: "assets/img/works/scgd.JPG",
      },
      {
        title: "Dais",
        description: "Angular/Symfony application",
        image: "assets/img/works/dais.JPG",
      },
      {
        title: "Connect",
        description: "Drupal/React application",
        image: "assets/img/works/connect.JPG",
      },
      {
        title: "Greetbox",
        description: "Mobile application",
        image: "assets/img/works/greetbox.JPG",
      },
      {
        title: "Catsup",
        description: "React/Nest/Quasar application",
        image: "assets/img/works/catsup.JPG",
      },
      {
        title: "Banquetes Antony",
        description: "HTML/CSS freelance project",
        image: "assets/img/works/banqanto.JPG",
      },
    ];
  }

  ngOnInit() {}
}
