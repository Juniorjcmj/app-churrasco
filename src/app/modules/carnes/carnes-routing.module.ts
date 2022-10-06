import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { CarnesComponent } from './carnes.component';

const routes: Routes = [
  {
    path: '',
    component: CarnesComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarnesRoutingModule {}
