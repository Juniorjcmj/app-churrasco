import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoPessoaComponent } from './consumo-pessoa.component';

describe('ConsumoPessoaComponent', () => {
  let component: ConsumoPessoaComponent;
  let fixture: ComponentFixture<ConsumoPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoPessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
