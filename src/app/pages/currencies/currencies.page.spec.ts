import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrenciesPage } from './currencies.page';

describe('CurrenciesPage', () => {
  let component: CurrenciesPage;
  let fixture: ComponentFixture<CurrenciesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
