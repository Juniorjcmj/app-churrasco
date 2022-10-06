import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcompanhamentoComponent } from './acompanhamento.component';

const routes: Routes = [
  {
    path: '',
    component: AcompanhamentoComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcompanhamentoRoutingModule {}
