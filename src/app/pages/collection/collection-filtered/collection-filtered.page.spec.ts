import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionFilteredPage } from './collection-filtered.page';

describe('CollectionFilteredPage', () => {
  let component: CollectionFilteredPage;
  let fixture: ComponentFixture<CollectionFilteredPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionFilteredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
