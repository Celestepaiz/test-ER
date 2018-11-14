import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTouristerComponent } from './footer-tourister.component';

describe('FooterTouristerComponent', () => {
  let component: FooterTouristerComponent;
  let fixture: ComponentFixture<FooterTouristerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTouristerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTouristerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
