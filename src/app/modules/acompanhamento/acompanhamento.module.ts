import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcompanhamentoComponent } from './acompanhamento.component';
import { AcompanhamentoRoutingModule } from './acompanhamento-routing.module';
import { AcompanhamentoFormComponent } from './acompanhamento-form/acompanhamento-form.component';
import { PrimeNGModule } from '../../share/primeng.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AcompanhamentoComponent,
    AcompanhamentoFormComponent
  ],
  imports: [
    CommonModule,
    AcompanhamentoRoutingModule,
    FormsModule,
    PrimeNGModule,

  ]
})
export class AcompanhamentoModule { }
