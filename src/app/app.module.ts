import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertCurrencySelectComponent } from './components/convert-currency/convert-currency-select/convert-currency-select.component';
import { ConvertCurrencyComponent } from './components/convert-currency/convert-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertCurrencyComponent,
    ConvertCurrencySelectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
