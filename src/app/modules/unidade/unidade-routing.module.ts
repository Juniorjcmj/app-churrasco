import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UnidadeComponent } from './unidade.component';

const routes: Routes = [
  {
    path: '',
    component: UnidadeComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadeRoutingModule {}
