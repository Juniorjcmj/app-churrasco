import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoDiverso } from '../../modules/servicos-diversos/servicoDiverso';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: "",
    password:""
  }
  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.username != "" && this.credentials.password != "")&& (this.credentials.username != null && this.credentials.password != null))
    {
        this.service.genereteToken(this.credentials.username, this.credentials.password).subscribe(
          (response:any) =>{
                     //success
           console.log(response)
           localStorage.setItem('token', response.access_token);
           localStorage.setItem('expires_in', response.expires_in);
           localStorage.setItem('nome', response.nome_completo);
           localStorage.setItem('refresh_token', response.refresh_token);
           localStorage.setItem('token_type', response.token_type);
           localStorage.setItem('nome', response.nome_completo.split(' ')[0])

          //  if(this.service.getUser() != null || this.loginService.getUser() != undefined){
          //   localStorage.clear();
          //  }
           localStorage.setItem('usuarioId', response.usuario_id);
          //  this.userService.getGruposByUser(response.usuario_id).subscribe(
          //    data => {
          //        let grupos = data;
          //        let nomes = [];
          //        for(let i =0; i < grupos.length; i++){
          //           nomes[i] = grupos[i].nome;

          //        }
          //        localStorage.setItem('grupos', JSON.stringify(nomes))

          //    }
          //  )
          //  this.loginService.isLoggedIn();
          //  this.router.navigate(['home'])

          }, error =>{
            //error
            console.log(error);
          }
        )

    }else{
      console.log("Campos estao vazios")
    }
  }

}
