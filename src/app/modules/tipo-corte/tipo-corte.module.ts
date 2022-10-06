import { TipoCorteRoutingModule } from './TipoCorte-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoCorteComponent } from './tipo-corte.component';



@NgModule({
  declarations: [
    TipoCorteComponent
  ],
  imports: [
    CommonModule, TipoCorteRoutingModule
  ]
})
export class TipoCorteModule { }
