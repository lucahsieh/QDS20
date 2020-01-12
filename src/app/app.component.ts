import { Component } from '@angular/core';

// declare var hello: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qds20';

  ngOnInit(){
  }

  // result = hello();
  constructor(){
    // this.result;
  }
}
