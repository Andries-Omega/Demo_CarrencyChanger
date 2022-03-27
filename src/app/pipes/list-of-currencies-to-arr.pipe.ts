import { Pipe, PipeTransform } from '@angular/core';
import { Currencies, Currency, ListOfCurrencies } from '../model/currencies';

@Pipe({
  name: 'listOfCurrenciesToArr',
})
export class ListOfCurrenciesToArrPipe implements PipeTransform {
  transform(lOfCurrencies: ListOfCurrencies): Currency[] {
    return Object.values(lOfCurrencies.data);
  }
}
