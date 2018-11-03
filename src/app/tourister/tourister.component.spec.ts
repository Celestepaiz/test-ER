import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristerComponent } from './tourister.component';

describe('TouristerComponent', () => {
  let component: TouristerComponent;
  let fixture: ComponentFixture<TouristerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
