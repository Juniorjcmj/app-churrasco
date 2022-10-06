import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TipoAcompanhamentoComponent } from './tipo-acompanhamento.component';

const routes: Routes = [
  {
    path: '',
    component: TipoAcompanhamentoComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoAcompanhamentoRoutingModule {}
