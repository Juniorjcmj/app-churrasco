import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAcompanhamentoComponent } from './tipo-acompanhamento.component';

describe('TipoAcompanhamentoComponent', () => {
  let component: TipoAcompanhamentoComponent;
  let fixture: ComponentFixture<TipoAcompanhamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoAcompanhamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoAcompanhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
