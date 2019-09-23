import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  public s1 = 'Al.t.bot is avaliable on these brokers';
  public p1 = 'These are brokers that work with us and use our smart trading bot..';
  constructor() { }

  ngOnInit() {
  }

}
