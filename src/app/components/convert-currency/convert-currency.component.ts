import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency, ListOfCurrencies } from 'src/app/model/currencies';
import { CurrencyConvertService } from 'src/app/services/currency-convert.service';

@Component({
  selector: 'app-convert-currency',
  templateUrl: './convert-currency.component.html',
  styleUrls: ['./convert-currency.component.scss'],
})
export class ConvertCurrencyComponent implements OnInit {
  dropDownOpen = false;
  fromDropOpen: boolean = false;
  toDropOpen: boolean = false;
  fromCurrency: Currency = { code: 'USD', value: 1 };
  toCurrency: Currency = { code: 'ZAR', value: 14 };
  whatToConvertValue: number = 0;

  converstionCurrency$!: Observable<ListOfCurrencies>;

  constructor(private currencyService: CurrencyConvertService) {}

  ngOnInit(): void {}

  handleCurrencySelect(currency: Currency) {
    if (this.fromDropOpen) {
      this.fromCurrency = currency;
      this.fromDropOpen = false;
    } else {
      // if this functions runs then one of the drop downs MUST be open
      this.toCurrency = currency;
      this.toDropOpen = false;
    }
  }

  convertCurrency() {
    if (this.whatToConvertValue) {
      this.converstionCurrency$ = this.currencyService.convertCurrency(
        this.whatToConvertValue,
        this.fromCurrency.code,
        this.toCurrency.code
      );
    }
  }
}
