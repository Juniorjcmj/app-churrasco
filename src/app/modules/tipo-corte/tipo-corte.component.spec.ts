import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCorteComponent } from './tipo-corte.component';

describe('TipoCorteComponent', () => {
  let component: TipoCorteComponent;
  let fixture: ComponentFixture<TipoCorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoCorteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoCorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
