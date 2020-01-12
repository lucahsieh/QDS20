import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleTrendComponent } from './google-trend.component';

describe('GoogleTrendComponent', () => {
  let component: GoogleTrendComponent;
  let fixture: ComponentFixture<GoogleTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
