import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'altbot';
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    nav: true,
    autoplay: true, 
    autoplaySpeed: 3000,
    autoplayHoverPause:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      541: {
        items: 1
      },
      1025: {
        items: 2
      }
    },    
  }
}
