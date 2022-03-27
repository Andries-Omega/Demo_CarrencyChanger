import { Pipe, PipeTransform } from '@angular/core';
import { Currencies, Currency, ListOfCurrencies } from '../model/currencies';

@Pipe({
  name: 'convertConvertedCurrency',
})
export class ConvertConvertedCurrencyPipe implements PipeTransform {
  transform(recievedData: ListOfCurrencies, toCurrency: string): number {
    return recievedData.data[toCurrency].value;
  }
}
