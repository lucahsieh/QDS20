import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import {ChartModule} from 'primeng/chart';
import {DropdownModule} from 'primeng/dropdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindAveragePriceNextYearMonthComponent } from './find-average-price-next-year-month/find-average-price-next-year-month.component';
import { SuggestedPriceComponent } from './suggested-price/suggested-price.component';
import { GoogleTrendComponent } from './google-trend/google-trend.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    FindAveragePriceNextYearMonthComponent,
    SuggestedPriceComponent,
    GoogleTrendComponent,
    FirstPageComponent,
    LineChartComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AutoCompleteModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    ChartModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
