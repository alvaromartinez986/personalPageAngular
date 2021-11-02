import { Component, Input, OnInit } from "@angular/core";
import { Work } from "./work.model";

@Component({
  selector: "app-work-item",
  templateUrl: "./work-item.component.html",
})
export class WorkItemComponent implements OnInit {
  @Input() work: Work;

  constructor() {}

  ngOnInit() {}
}
