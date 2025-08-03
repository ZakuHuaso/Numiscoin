import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewCoinPage } from './new-coin.page';

describe('NewCoinPage', () => {
  let component: NewCoinPage;
  let fixture: ComponentFixture<NewCoinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
