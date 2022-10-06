import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ServicosDiversosComponent } from './servicos-diversos.component';

const routes: Routes = [
  {
    path: '',
    component: ServicosDiversosComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicoDiversoRoutingModule {}
