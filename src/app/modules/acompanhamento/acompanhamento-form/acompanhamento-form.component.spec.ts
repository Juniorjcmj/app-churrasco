import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoFormComponent } from './acompanhamento-form.component';

describe('AcompanhamentoFormComponent', () => {
  let component: AcompanhamentoFormComponent;
  let fixture: ComponentFixture<AcompanhamentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompanhamentoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompanhamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
