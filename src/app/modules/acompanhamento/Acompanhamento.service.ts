import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { KeycloakService } from 'keycloak-angular';
import { Acompanhamento } from './acompanhamento';


@Injectable({
  providedIn: 'root'
})
export class AcompanhamentoService {

   apiUrlResourceServe= environment.apiUrlResourceServer+"V1/acompanhamento";
   apiUrlResourceServeTipo= environment.apiUrlResourceServer+"V1/tipo-acompanhamento";

  constructor( private httpClient: HttpClient,private router: Router, private keycloak: KeycloakService) { }


    getAll(){
      return this.httpClient.get<Acompanhamento[]>(`${this.apiUrlResourceServe}`)
    }



    //TIPO-ACOMPANHAMENTO
    getAllTipo(){
      return this.httpClient.get(`${this.apiUrlResourceServeTipo}`)
    }
}
