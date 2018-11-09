import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavabarTouristerComponent } from './navabar-tourister.component';

describe('NavabarTouristerComponent', () => {
  let component: NavabarTouristerComponent;
  let fixture: ComponentFixture<NavabarTouristerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavabarTouristerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavabarTouristerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
