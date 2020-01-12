import { Component, OnInit } from '@angular/core';

import  *  as  googleTrend  from  '../../jsonMonths/trendingData.json';


@Component({
  selector: 'app-google-trend',
  templateUrl: './google-trend.component.html',
  styleUrls: ['./google-trend.component.css']
})
export class GoogleTrendComponent implements OnInit {

  constructor() { }
  gTrend: googleTrendData[];

  ngOnInit() {
    var gTrend = (googleTrend  as  any).default;
    this.gTrend = gTrend;
    this.getAvgByYearMonth("04");
  }

  getAvgByYearMonth(month:string){
    var history: { [years: string] : number; } = {};
    for(var i = 0; i < this.gTrend.length; i++){
      var value = this.gTrend[i].Category;
      var yyyy = value.substr(0,4);
      var mm = value.substr(5,2);
      var pop = value.substr(8,2); //2020-01,59
      if(mm == month)
        history[yyyy] = Number(pop);
    }
    console.log("google trend of \"Vancouver Airbnb\"");
    console.log(history);
  }

}

interface googleTrendData{
  Category:string;
}
