import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcompanhamentoComponent } from './acompanhamento.component';
import { AcompanhamentoRoutingModule } from './acompanhamento-routing.module';



@NgModule({
  declarations: [
    AcompanhamentoComponent
  ],
  imports: [
    CommonModule,
    AcompanhamentoRoutingModule
  ]
})
export class AcompanhamentoModule { }
