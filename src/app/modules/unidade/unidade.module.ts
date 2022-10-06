import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadeComponent } from './unidade.component';
import { UnidadeRoutingModule } from './unidade-routing.module';



@NgModule({
  declarations: [
    UnidadeComponent
  ],
  imports: [
    CommonModule, UnidadeRoutingModule
  ]
})
export class UnidadeModule { }
