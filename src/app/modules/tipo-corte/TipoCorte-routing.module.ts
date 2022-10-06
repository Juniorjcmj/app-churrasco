import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TipoCorteComponent } from './tipo-corte.component';

const routes: Routes = [
  {
    path: '',
    component: TipoCorteComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoCorteRoutingModule {}
