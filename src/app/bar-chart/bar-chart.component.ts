import { Component, OnInit } from '@angular/core';

declare var check: any;

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  data: any;

  data1 = [
    104.2,
    107,
    109,
    112,
    115
  ];

  constructor() {
      this.data = {
          labels: ['Electric Kettle', 'TV', 'Dogs Ok','Laundry in unit','Wifi'],
          datasets: [
              {
                  label: 'Suggested Price with Ammenities',
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  data: this.data1
              },
              {
                  label: 'Current Suggested Price',
                  backgroundColor: '#9CCC65',
                  borderColor: '#7CB342',
                  data: [103.3338376, 103.3338376,103.3338376,103.3338376,103.3338376]
              }
          ]
      }
  }
ngOnInit() {}
}
