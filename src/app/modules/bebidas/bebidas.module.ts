import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BebidasComponent } from './bebidas.component';
import { BebidasRoutingModule } from './bebidas-routing.module';



@NgModule({
  declarations: [
    BebidasComponent
  ],
  imports: [
    CommonModule,
    BebidasRoutingModule
  ]
})
export class BebidasModule { }
