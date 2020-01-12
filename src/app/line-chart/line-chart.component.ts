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
        this.data = {
            labels: this.labels,
            datasets: [
                {
                    label: '',
                    data: this.priceHistory,
                    fill: false,
                    borderColor: '#4bc0c0'
                }
            ]
        }
    }

  ngOnInit() {
  }

}
