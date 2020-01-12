import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../data.json';


@Component({
  selector: 'app-find-average-price-next-year-month',
  templateUrl: './find-average-price-next-year-month.component.html',
  styleUrls: ['./find-average-price-next-year-month.component.css']
})
export class FindAveragePriceNextYearMonthComponent implements OnInit {

  constructor() { }

  entries:any;

  ngOnInit() {
    this.entries  = (data  as  any).default;
    console.log(this.entries);

  }

  filterMonth(month:number){
    
  }

  filterLocation( locationName:string){
    var sameLocation = [];
    for(var i = 0; i < this.entries.length; i++){
      // sameLocation.push(data[i]);
    }
    return sameLocation;
  }

  groupByYear(){

  }

}
