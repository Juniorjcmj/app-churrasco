import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AcompanhamentoService {

   apiUrlResourceServe= environment.apiUrlResourceServer+"V1/acompanhamento";
  // apiUrlAuth = environment.apiUrlAuthenticationServer+'realms/quarkus/protocol/openid-connect/token';

  // verificarSeEstaLogado = new EventEmitter();

  constructor( private httpClient: HttpClient,private router: Router) { }


    getAll(){

      return this.httpClient.get(`${this.apiUrlResourceServe}`)
    }
}
