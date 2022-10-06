import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosDiversosComponent } from './servicos-diversos.component';
import { ServicoDiversoRoutingModule } from './servicoDiverso-routing.module';



@NgModule({
  declarations: [
    ServicosDiversosComponent
  ],
  imports: [
    CommonModule, ServicoDiversoRoutingModule
  ]
})
export class ServicosDiversosModule { }
