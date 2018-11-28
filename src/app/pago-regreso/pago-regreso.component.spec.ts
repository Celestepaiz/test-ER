import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoRegresoComponent } from './pago-regreso.component';

describe('PagoRegresoComponent', () => {
  let component: PagoRegresoComponent;
  let fixture: ComponentFixture<PagoRegresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoRegresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoRegresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
