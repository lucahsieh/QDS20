import { Component, OnInit } from '@angular/core';
import  *  as  april2017  from  '../../jsonMonths/april2017.json';
import  *  as  april2018  from  '../../jsonMonths/april2018.json';
import  *  as  april2019  from  '../../jsonMonths/april2019.json';
import  *  as  oct2017  from  '../../jsonMonths/oct2017.json';
import  *  as  oct2018  from  '../../jsonMonths/oct2018.json';
import  *  as  oct2019  from  '../../jsonMonths/oct2019.json';

declare var suggestedPrice: any;


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  labelsOfPriceChart:string[];
  data: any;

  targetPrice:string;
  cates: DropdownItems[];
  selectedCate: DropdownItems;

  listings:DropdownItems[];
  selectedListing:DropdownItems;

  months:DropdownItems[];
  selectedMonth:DropdownItems;

  neighs:DropdownItems[];
  selectedNeigh:DropdownItems;
  
  types:DropdownItems[];
  selectedType:DropdownItems;

  rawData:any;
  avgResult:any;
  avgPerYear:any;
  avgPerYearArr:number[];

  suggestedResult:number;

  

  ngOnInit() {
    var rawData: { [years: string] : Object; } = {};
    rawData["201704"] = (april2017  as  any).default;
    rawData["201804"] = (april2018  as  any).default;
    rawData["201904"] = (april2019  as  any).default;
    rawData["201710"] = (oct2017  as  any).default;
    rawData["201810"] = (oct2018  as  any).default;
    rawData["201910"] = (oct2019  as  any).default;
    this.rawData = rawData;

  }

  constructor() {
    this.selectedListing = {name: '', code: ''};
    this.labelsOfPriceChart = [];
    this.cates = [
      {name: 'Rent', code: 'Rent'},
      {name: 'Sell', code: 'Sell'}
    ];
    this.listings = [
      {name: 'House', code: 'House'}
    ];
    this.months = [
      {name: 'April', code: '04'},
      {name: 'October', code: '10'}   //TODO: month 1-12;
    ];
    this.neighs = [
      {name: 'Downtown Eastside', code: 'Downtown Eastside'},  //TODO: need all neighborhoods in array
      {name: 'Arbutus Ridge', code: 'Arbutus Ridge'},
      {name: 'Kitsilano', code: 'Kitsilano'}
    ];
    this.types = [
      {name: 'Entire home/apt', code: 'Entire home/apt'},  //TODO: need all neighborhoods in array
      {name: 'Private room', code: 'Private room'},
      {name: 'Shared room', code: 'Shared room'}
    ];
    this.avgPerYearArr = [];
   }

  handleSearch() {
    this.avgPerYearArr = this.getAvgPerYear(this.selectedMonth.code);
    console.log(this.avgPerYearArr);
    var result = suggestedPrice(this.avgPerYearArr, this.avgPerYearArr.length);
    console.log(result);
    this.updateLables();
    this.updateLinechart();
    this.suggestedResult = result;
  }

  updateLables(){
    this.labelsOfPriceChart = [];
    for (let key in this.avgPerYear) {
      var value = key + "-" + this.selectedMonth.code;
      this.labelsOfPriceChart.push(value);
    }
  }





  /**
   * Calculate avg house price
   */

  getAvgPerYear(month:string){
    var avgPerYear:{[years:string]:number} = {};
    for (let key in this.rawData) {
      if(key.substr(4,2) == month){
        let year = key.substr(0,4);
        let value = this.rawData[key];
        var sameLocationArr = this.filterLocation(this.selectedNeigh.name,value);
        var sameRoomTypeArr = this.filterRoomType(this.selectedType.name,sameLocationArr )
        avgPerYear[year] = this.calculateAve(sameRoomTypeArr);
      }
    }
    console.log("====report====");
    console.log("neighborhood name:" + this.selectedNeigh.name);
    console.log("month name:" + this.selectedMonth.name);
    console.log(avgPerYear);
    this.avgPerYear = avgPerYear;
    this.avgPerYearArr = [];
    for (let key in avgPerYear) {
      let value = avgPerYear[key];
      this.avgPerYearArr.push(value);
    }
    return this.avgPerYearArr;
  }

  filterLocation(locationName:string, arr:JsonMap[]){
    var sameLocation = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i].neighbourhood == locationName)
      sameLocation.push(arr[i]);
    }
    return sameLocation;
  }

  filterRoomType(roomType:string, arr:JsonMap[]){
    var sameType = [];
    for(var i = 0; i < arr.length; i++){      
      if(arr[i].room_type == roomType)
        sameType.push(arr[i]);
    }
    return sameType;
  }

  calculateAve(arr:JsonMap[]){
    var avg = arr[1].price;
    for(var i = 0; i < arr.length; i++){
      avg = (avg + arr[i].price)/2;
    }
    return avg;
  }

  /** update line chart */
  updateLinechart(){
    this.data = {
      labels: this.labelsOfPriceChart,
      datasets: [
          {
              label: "Price History",
              data: this.avgPerYearArr,
              fill: false,
              borderColor: '#4bc0c0'
          }
      ]
  }
  }

}

interface DropdownItems{
  name:string;
  code:string;
}
interface JsonMap{
  neighbourhood: string;
  price:number;
  room_type:string;
}

