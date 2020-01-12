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
  result = suggestedPrice([69.66, 70.22, 86.22, 90.00, 70], 5);

  constructor() { 
    console.log(this.result);
  }
  ngOnInit() {
  }
}
