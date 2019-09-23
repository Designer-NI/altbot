import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { AutoHeightService } from 'ngx-owl-carousel-o/lib/services/autoheight.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public s1 ='Live trading graph of our account equity';
    
  public p1 ='We are transparent and this is our live trading account where the account equity and main performance inidicators are updated in real time.';
  constructor() { }

  ngOnInit() {

  }

  activeTab = 'tab1';

  search(activeTab){
    this.activeTab = activeTab;
  }

  result(activeTab){
    this.activeTab = activeTab;
  }
  public columnChart: GoogleChartInterface = {  
    chartType: 'ColumnChart',
    dataTable: [
      ['Country', 'Performance', 'Profits'],
      ['Germany', 700, 1200],
      ['USA', 300, 600],
      ['Brazil', 400, 500],
      ['Canada', 500, 1000],
      ['France', 600, 1100],
      ['RU', 800, 1000]
    ],
    options: {
      legend:"none",
		  height: 500,
		  width: 1000,
	    chartArea: {
	        height: 500,
	        width: 1000
      }
    }
  };

myfunction() {
  let ccComponent = this.columnChart.component;
  let ccWrapper = ccComponent.wrapper;

  //force a redraw
  ccComponent.draw();
}
  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    //opt_firstRowIsData: true,
    options: {
      is3D: true,
      legend:"none",
		  height: 500,
		  width: 500,
	    chartArea: {
	        height: 500,
          width: 500
	    }
    },
  };
}
