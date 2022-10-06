import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarnesComponent } from './carnes.component';
import { CarnesRoutingModule } from './carnes-routing.module';



@NgModule({
  declarations: [
    CarnesComponent
  ],
  imports: [
    CommonModule,
    CarnesRoutingModule
  ]
})
export class CarnesModule { }
