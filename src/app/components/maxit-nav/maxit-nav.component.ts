import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-maxit-nav",
  templateUrl: "./maxit-nav.component.html",
  styleUrls: ["./maxit-nav.component.css"]
})
export class MaxitNavComponent implements OnInit {
  isCollapsed: boolean;

  navCollapse() {
    this.isCollapsed = !this.isCollapsed;
    
  }
  constructor() {}

  
  ngOnInit() {}
}
