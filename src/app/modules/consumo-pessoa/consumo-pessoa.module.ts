import { ConsumoPessoaRoutingModule } from './consumoPessoa-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumoPessoaComponent } from './consumo-pessoa.component';



@NgModule({
  declarations: [
    ConsumoPessoaComponent
  ],
  imports: [
    CommonModule, ConsumoPessoaRoutingModule
  ]
})
export class ConsumoPessoaModule { }
