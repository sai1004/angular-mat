import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maxit-test-right',
  templateUrl: './maxit-test-right.component.html',
  styleUrls: ['./maxit-test-right.component.css']
})
export class MaxitTestRightComponent implements OnInit {


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
 
  ];


  constructor() { }

  ngOnInit() {
  }

}
