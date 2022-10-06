import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BebidasComponent } from './bebidas.component';

const routes: Routes = [
  {
    path: '',
    component: BebidasComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BebidasRoutingModule {}
