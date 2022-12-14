import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { KeycloakService } from 'keycloak-angular';
import { AcompanhamentoDto } from './acompanhamento';


@Injectable({
  providedIn: 'root'
})
export class AcompanhamentoService {



   apiUrlResourceServe= environment.apiUrlResourceServer+"V1/acompanhamento";
   apiUrlResourceServeTipo= environment.apiUrlResourceServer+"V1/tipo-acompanhamento";

  constructor( private httpClient: HttpClient,private router: Router, private keycloak: KeycloakService) { }


    getAll(){
      return this.httpClient.get<AcompanhamentoDto[]>(`${this.apiUrlResourceServe}`)
    }

    manterAcompanhamento(record: AcompanhamentoDto){
       if(record.id.length < 1 ){
          return  this.salvarAcompanhamento(record)
       }else{
          return this.alterarAcompanhamento(record)
       }
    }
    salvarAcompanhamento(record: AcompanhamentoDto){
      return  this.httpClient.post<AcompanhamentoDto>(`${this.apiUrlResourceServe}`, record).pipe();
    }
    alterarAcompanhamento(record: AcompanhamentoDto){

      return  this.httpClient.put<AcompanhamentoDto>(`${this.apiUrlResourceServe}`, record).pipe();
    }
    deleteAcompanhamento(record: string){
      return  this.httpClient.delete<AcompanhamentoDto>(`${this.apiUrlResourceServe}`+"?id="+record ).pipe();
    }



    //TIPO-ACOMPANHAMENTO
    getAllTipo(){
      return this.httpClient.get(`${this.apiUrlResourceServeTipo}`)
    }
}
