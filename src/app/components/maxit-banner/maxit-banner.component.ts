import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-maxit-banner",
  templateUrl: "./maxit-banner.component.html",
  styleUrls: ["./maxit-banner.component.css"]
})
export class MaxitBannerComponent implements OnInit {
  items: any[] = [
    {
      img: "../../../assets/img/icon/f-icon-3.png"
    },
    {
      img: "../../../assets/img/icon/f-icon-3.png"
    },
    {
      img: "../../../assets/img/icon/f-icon-3.png"
    },
    {
      img: "../../../assets/img/icon/f-icon-3.png"
    },
    {
      img: "../../../assets/img/icon/f-icon-3.png"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
