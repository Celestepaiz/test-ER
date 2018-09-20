import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DondeLlegasComponent } from './donde-llegas.component';

describe('DondeLlegasComponent', () => {
  let component: DondeLlegasComponent;
  let fixture: ComponentFixture<DondeLlegasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DondeLlegasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DondeLlegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
