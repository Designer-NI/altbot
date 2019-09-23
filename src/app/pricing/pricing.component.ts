import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  
  public s1 ='Pricing';
    
  public p1 ='This is our Al.t.bot pricing, its monthly or yearly based choose what suits you.If you have special requirements, get in touch with us and we can work it out.';
 

  constructor() { }

  ngOnInit() {
  }

}
