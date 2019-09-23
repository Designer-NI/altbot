import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {
  sectitle=[
    {
     s1:'Interested? There is more…',
    },    
  ]
  constructor() { }

  ngOnInit() {
  }

}
