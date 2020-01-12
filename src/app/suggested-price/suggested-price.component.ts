import { Component, OnInit } from '@angular/core';

declare var suggestedPrice: any;

@Component({
  selector: 'app-suggested-price',
  templateUrl: './suggested-price.component.html',
  styleUrls: ['./suggested-price.component.css']
})
export class SuggestedPriceComponent implements OnInit {

  // Result variable that runs suggestedPrice() from suggestFunction.js
  // @param (data[], target) - target is the index (the predicted value you want)
  // @return next predicted data
  result = suggestedPrice([102.30906185448066,124.78341727880205, 97.45905483403473], 3);
  result2 = suggestedPrice([1,2,2,8,23,35,54,74,94,83], 10);
  result3 = suggestedPrice([74,94,83], 3);


  constructor() { 
    console.log("2020 04 ave $");
    console.log(this.result);
    console.log("2020 04 ave G search");
    console.log(this.result3);

  }
  ngOnInit() {
  }
}