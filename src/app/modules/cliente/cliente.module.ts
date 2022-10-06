import { ClienteRoutingModule } from './clientes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';



@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule, ClienteRoutingModule
  ]
})
export class ClienteModule { }
