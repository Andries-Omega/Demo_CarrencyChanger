import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOfCurrencies } from '../model/currencies';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConvertService {
  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<ListOfCurrencies> {
    return this.http.get<ListOfCurrencies>(
      'https://api.currencyapi.com/v3/latest?apikey=rYxXPWJLUqb5f4KBe1Tvdwz8FG9RhTR8SRQlPMJV'
    );
  }

  convertCurrency(
    valueToConvert: number,
    fromCurrency: string,
    toCurrency: string
  ): Observable<ListOfCurrencies> {
    return this.http.get<ListOfCurrencies>(
      `https://api.currencyapi.com/v3/convert?value=${valueToConvert}&base_currency=${fromCurrency}&currencies=${toCurrency}`
    );
  }
}
