import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './share/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  // {path: '',pathMatch:'full', redirectTo:'login' },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'servico-diverso',
    loadChildren: () => import('./modules/servicos-diversos/servicos-diversos.module').then( m => m.ServicosDiversosModule)
  },
  {
    path: 'acompanhamento',
    loadChildren: () => import('./modules/acompanhamento/acompanhamento.module').then( m => m.AcompanhamentoModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./modules/bebidas/bebidas.module').then( m => m.BebidasModule)
  },
  {
    path: 'carnes',
    loadChildren: () => import('./modules/carnes/carnes.module').then( m => m.CarnesModule)
  },
  {
    path: 'consumo-pessoa',
    loadChildren: () => import('./modules/consumo-pessoa/consumo-pessoa.module').then( m => m.ConsumoPessoaModule)
  },
  {
    path: 'tipo-acompanhamento',
    loadChildren: () => import('./modules/tipo-acompanhamento/tipo-acompanhamento.module').then( m => m.TipoAcompanhamentoModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./modules/cliente/cliente.module').then( m => m.ClienteModule)
  },
  {
    path: 'tipo-corte',
    loadChildren: () => import('./modules/tipo-corte/tipo-corte.module').then( m => m.TipoCorteModule)
  },
  {
    path: 'unidade',
    loadChildren: () => import('./modules/unidade/unidade.module').then( m => m.UnidadeModule)
  },
  {
    path: 'orcamento',
    loadChildren: () => import('./modules/orcamento/orcamento.module').then( m => m.OrcamentoModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
