import { Component, OnInit } from '@angular/core';
import  *  as  april2017  from  '../../jsonMonths/april2017.json';
import  *  as  april2018  from  '../../jsonMonths/april2018.json';
import  *  as  april2019  from  '../../jsonMonths/april2019.json';
import  *  as  oct2017  from  '../../jsonMonths/oct2017.json';
import  *  as  oct2018  from  '../../jsonMonths/oct2018.json';
import  *  as  oct2019  from  '../../jsonMonths/oct2019.json';




@Component({
  selector: 'app-find-average-price-next-year-month',
  templateUrl: './find-average-price-next-year-month.component.html',
  styleUrls: ['./find-average-price-next-year-month.component.css']
})
export class FindAveragePriceNextYearMonthComponent implements OnInit {

  constructor() { }

  rawData:any;
  avgResult:any;

  ngOnInit() {
    var rawData: { [years: string] : Object; } = {};
    rawData["201704"] = (april2017  as  any).default;
    rawData["201804"] = (april2018  as  any).default;
    rawData["201904"] = (april2019  as  any).default;
    rawData["201710"] = (oct2017  as  any).default;
    rawData["201810"] = (oct2018  as  any).default;
    rawData["201910"] = (oct2019  as  any).default;
    this.rawData = rawData;

    this.getAvgPerYear("04");
  }

  getAvgPerYear(month:string){
    var avgPerYear:{[years:string]:number} = {};
    for (let key in this.rawData) {
      if(key.substr(4,2) == month){
        let year = key.substr(0,4);
        let value = this.rawData[key];
        var sameLocationArr = this.filterLocation("Downtown Eastside",value);
        avgPerYear[year] = this.calculateAve(sameLocationArr);
      }
    }
    console.log(avgPerYear);
    return avgPerYear;
  }

  filterLocation(locationName:string, arr:JsonMap[]){
    var sameLocation = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i].neighbourhood == locationName)
      sameLocation.push(arr[i]);
    }
    return sameLocation;
  }

  calculateAve(arr:JsonMap[]){
    var avg = arr[1].price;
    for(var i = 0; i < arr.length; i++){
      avg = (avg + arr[i].price)/2;
    }
    return avg;
  }

}

interface JsonMap{
  neighbourhood: string;
  price:number;
  room_type:string;
}

