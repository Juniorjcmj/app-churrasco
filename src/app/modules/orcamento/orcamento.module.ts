import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoComponent } from './orcamento.component';
import { OrcamentoRoutingModule } from './orcamento-routing.module';



@NgModule({
  declarations: [
    OrcamentoComponent
  ],
  imports: [
    CommonModule, OrcamentoRoutingModule
  ]
})
export class OrcamentoModule { }
