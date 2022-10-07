import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button'
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,


  ],
  exports:[
    ButtonModule,
    MenubarModule,
    CardModule
  ]
})
export class PrimeNGModule { }
