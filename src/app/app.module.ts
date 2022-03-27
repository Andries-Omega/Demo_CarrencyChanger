import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertCurrencySelectComponent } from './components/convert-currency/convert-currency-select/convert-currency-select.component';
import { ConvertCurrencyComponent } from './components/convert-currency/convert-currency.component';
import { ListOfCurrenciesComponent } from './components/convert-currency/list-of-currencies/list-of-currencies.component';
import { ListOfCurrenciesToArrPipe } from './pipes/list-of-currencies-to-arr.pipe';
import { ConvertConvertedCurrencyPipe } from './pipes/convert-converted-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertCurrencyComponent,
    ConvertCurrencySelectComponent,
    ListOfCurrenciesComponent,
    ListOfCurrenciesToArrPipe,
    ConvertConvertedCurrencyPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
