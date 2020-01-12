import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  country: any;     
  countries: any[];
  filteredCountriesSingle: any[];

  filterCountrySingle(event) {
      const query = event.query;        
      console.log("q:::"+ event.query);
      let countries = ["Downtown Eastside","Arbutus Ridge","Downtown"]; //TODO: need all neighborhoods in array
      this.filteredCountriesSingle = this.filterCountry(query, countries);

  }

  filterCountry(query, countries: any[]):any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    for(let i = 0; i < countries.length; i++) {
        let country = countries[i];
        if(country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }
    console.log("filtered");
    console.log(filtered);
    return filtered;
  }



}