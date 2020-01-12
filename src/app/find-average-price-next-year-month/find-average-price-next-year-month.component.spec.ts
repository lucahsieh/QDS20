import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAveragePriceNextYearMonthComponent } from './find-average-price-next-year-month.component';

describe('FindAveragePriceNextYearMonthComponent', () => {
  let component: FindAveragePriceNextYearMonthComponent;
  let fixture: ComponentFixture<FindAveragePriceNextYearMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAveragePriceNextYearMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAveragePriceNextYearMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
