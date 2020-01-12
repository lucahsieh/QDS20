import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindAveragePriceNextYearMonthComponent } from './find-average-price-next-year-month/find-average-price-next-year-month.component';
import { SuggestedPriceComponent } from './suggested-price/suggested-price.component';

@NgModule({
  declarations: [
    AppComponent,
    FindAveragePriceNextYearMonthComponent,
    SuggestedPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
