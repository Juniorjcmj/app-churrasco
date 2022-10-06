import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ConsumoPessoaComponent } from './consumo-pessoa.component';

const routes: Routes = [
  {
    path: '',
    component: ConsumoPessoaComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumoPessoaRoutingModule {}
