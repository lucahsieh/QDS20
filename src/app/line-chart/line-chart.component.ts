import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  data: any;
  @Input() labels:string[];
  @Input() priceHistory:number[];

    constructor() {
        
    }

  ngOnInit() {
    this.data = {
      labels: "",
      datasets: [
          {
              label: this.labels,
              data: this.priceHistory,
              fill: false,
              borderColor: '#4bc0c0'
          }
      ]
  }
  }

}
