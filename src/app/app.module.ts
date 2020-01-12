import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindAveragePriceNextYearMonthComponent } from './find-average-price-next-year-month/find-average-price-next-year-month.component';
import { SuggestedPriceComponent } from './suggested-price/suggested-price.component';
import { GoogleTrendComponent } from './google-trend/google-trend.component';
import { FirstPageComponent } from './first-page/first-page.component';



@NgModule({
  declarations: [
    AppComponent,
    FindAveragePriceNextYearMonthComponent,
    SuggestedPriceComponent,
    GoogleTrendComponent,
    FirstPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AutoCompleteModule,
    FormsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
