import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertCurrencyComponent } from './convert-currency.component';

describe('ConvertCurrencyComponent', () => {
  let component: ConvertCurrencyComponent;
  let fixture: ComponentFixture<ConvertCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
