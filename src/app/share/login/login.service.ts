import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // apiUrlResourceServe= environment.apiUrlResourceServer + "oauth/token";
  // apiUrlAuth = environment.apiUrlAuthenticationServer+'realms/quarkus/protocol/openid-connect/token';

  // verificarSeEstaLogado = new EventEmitter();

  constructor( private httpClient: HttpClient,private router: Router) { }


    // genereteToken(username: string, password:string){
    //         let params = new URLSearchParams();
    //         params.append('grant_type','password');
    //         params.append('client_id', "backend-service");
    //         params.append('client_secret', 'secret');
    //         params.append('username', username);
    //         params.append('password', password);

    //         let headers =
    //           new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

    //   return this.httpClient.post(`${this.apiUrlAuth}`,params.toString(),{ headers: headers })
    // }
}
