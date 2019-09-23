import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   
  constructor() { }

  ngOnInit() {

  }
  value: number = 123;
  options: Options = {
    floor: 0,
    ceil: 250
  };
  value2: number = 123;
  options2: Options = {
    floor: 0,
    ceil: 250
  };
}
