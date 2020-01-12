import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggested-price',
  templateUrl: './suggested-price.component.html',
  styleUrls: ['./suggested-price.component.css']
})
export class SuggestedPriceComponent implements OnInit {
  count = 0;
  sumX = 0;
  sumX2 = 0;
  sumXY = 0;
  sumY = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
