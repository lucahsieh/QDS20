import { Component, OnInit } from '@angular/core';

declare var suggestedPrice: any;

@Component({
  selector: 'app-suggested-price',
  templateUrl: './suggested-price.component.html',
  styleUrls: ['./suggested-price.component.css']
})
export class SuggestedPriceComponent implements OnInit {
  result = suggestedPrice();
  constructor() { 
    this.result;
  }
  ngOnInit() {
  }
}
