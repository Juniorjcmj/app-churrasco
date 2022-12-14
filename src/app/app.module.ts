import {DEFAULT_CURRENCY_CODE, LOCALE_ID, APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AcompanhamentoModule } from './modules/acompanhamento/acompanhamento.module';
import { BebidasModule } from './modules/bebidas/bebidas.module';
import { CarnesModule } from './modules/carnes/carnes.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { ConsumoPessoaModule } from './modules/consumo-pessoa/consumo-pessoa.module';
import { HomeModule } from './modules/home/home.module';
import { OrcamentoModule } from './modules/orcamento/orcamento.module';
import { ServicosDiversosModule } from './modules/servicos-diversos/servicos-diversos.module';
import { TipoAcompanhamentoModule } from './modules/tipo-acompanhamento/tipo-acompanhamento.module';
import { TipoCorteModule } from './modules/tipo-corte/tipo-corte.module';
import { UnidadeModule } from './modules/unidade/unidade.module';
import { MenuComponent } from './share/menu/menu.component';
import { PrimeNGModule } from './share/primeng.module';
import {MenubarModule} from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './share/login/login.component';


import { AuthGuard } from './guards/auth.guard';
import {KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180/',
        realm: 'quarkus',
        clientId: 'churrasco'
      },
      initOptions: {
        onLoad: 'login-required',
       // flow:"standard"
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AcompanhamentoModule,
    BebidasModule,
    CarnesModule,ClienteModule,
    ConsumoPessoaModule,
    HomeModule,
    OrcamentoModule,
    ServicosDiversosModule,
    TipoAcompanhamentoModule,
    TipoCorteModule,
    UnidadeModule,
    PrimeNGModule,
    MenubarModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,


  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },

    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },

    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
