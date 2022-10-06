import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoAcompanhamentoComponent } from './tipo-acompanhamento.component';
import { TipoAcompanhamentoRoutingModule } from './TipoAcompanhamento-routing.module';



@NgModule({
  declarations: [
    TipoAcompanhamentoComponent
  ],
  imports: [
    CommonModule, TipoAcompanhamentoRoutingModule
  ]
})
export class TipoAcompanhamentoModule { }
