import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosDiversosComponent } from './servicos-diversos.component';

describe('ServicosDiversosComponent', () => {
  let component: ServicosDiversosComponent;
  let fixture: ComponentFixture<ServicosDiversosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosDiversosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosDiversosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
