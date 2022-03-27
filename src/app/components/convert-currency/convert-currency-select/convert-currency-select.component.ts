import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency, ListOfCurrencies } from 'src/app/model/currencies';
import { CurrencyConvertService } from 'src/app/services/currency-convert.service';

@Component({
  selector: 'app-convert-currency-select',
  templateUrl: './convert-currency-select.component.html',
  styleUrls: ['./convert-currency-select.component.scss'],
})
export class ConvertCurrencySelectComponent implements OnInit {
  @Input() fromDropOpen!: boolean;
  @Input() toDropOpen!: boolean;
  @Input() fromCurrency!: Currency;
  @Input() toCurrency!: Currency;

  @Output() fromDropChange = new EventEmitter<boolean>();
  @Output() toDropChange = new EventEmitter<boolean>();
  whatToConvertValue!: number;
  @Output() whatToConvert = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  handleFromClick() {
    this.fromDropOpen = !this.fromDropOpen;
    if (this.fromDropOpen) {
      this.toDropOpen = false;
    }
    this.fromDropChange.emit(this.fromDropOpen);
  }

  handleToClick() {
    this.toDropOpen = !this.toDropOpen;
    if (this.toDropOpen) {
      this.fromDropOpen = false;
    }
    this.toDropChange.emit(this.toDropOpen);
  }

  handleKeyUp() {
    if (this.whatToConvertValue) {
      this.whatToConvert.emit(this.whatToConvertValue);
    }
  }
}
