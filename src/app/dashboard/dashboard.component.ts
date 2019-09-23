import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
  display='none';
  DISPLAY='none';
  constructor(){}

  openModalDialog(){
    this.display='block'; 
  }

  closeModalDialog(){
    this.display='none'; 
  }
  onClosePopup(){
    this.DISPLAY='none';
  }
  openModalPopup(){
    this.DISPLAY='block';
  }
  closeAllPopup(){
    this.onClosePopup()
    this.closeModalDialog()
  }
}
