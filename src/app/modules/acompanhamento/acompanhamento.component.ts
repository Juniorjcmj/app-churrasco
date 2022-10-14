import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AcompanhamentoDto } from './acompanhamento';
import { AcompanhamentoService } from './Acompanhamento.service';
import { TipoAcompanhamento } from '../tipo-acompanhamento/tipoAcompanhamento';
import { catchError, delay, Observable, of, tap } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss'],

  providers: [MessageService,ConfirmationService]
})
export class AcompanhamentoComponent implements OnInit {

  acompanhamentoDialog!: boolean;

  acompanhamentos$: Observable<AcompanhamentoDto[]>;

  acompanhamento!: AcompanhamentoDto;

  selectedAcompanhamento!: AcompanhamentoDto[];

  submitted!: boolean;

  statuses!: any[];

  constructor( private messageService: MessageService,
    private confirmationService: ConfirmationService,
     private serviceResurce: AcompanhamentoService,
     private spinner: NgxSpinnerService ){

  //  this.acompanhamentos = [{id:'1', descricao: 'Salada', kg: '2,6',tipoAcompanhamento: 'Vegano', valorUn:'2,7',valorTotal:'15,99'},
  //                           { id:'2', descricao: 'Canjiquinha', kg: '8',tipoAcompanhamento: 'Doce', valorUn:'1,4',valorTotal:'13,7'}]

  this.acompanhamentos$ = this.serviceResurce.getAll()
    .pipe(
      delay(2000),
      tap(s =>{
        this.spinner.hide();
      }),
      catchError(erros => {
        this.spinner.hide();
        return of([])
  })
    )

  this.serviceResurce.getAllTipo().subscribe(
    (data: any) => {
      this.statuses = data;
    }
  )

   }

  ngOnInit(): void {
    this.spinner.show();
  }
  openNew() {
    this.acompanhamento = {id:'', descricao: '', kg: '',tipoAcompanhamento: '', valorUn:'',valorTotal:''};
    this.submitted = false;
    this.acompanhamentoDialog = true;
}
deleteSelectedacompanhamentos() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected acompanhamentos?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                //this.acompanhamentos$ = this.acompanhamentos$.filter(val => !this.selectedAcompanhamento.includes(val));
                this.selectedAcompanhamento = [];
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'acompanhamentos Deleted', life: 3000});
            }
        });
    }

    editacompanhamento(acompanhamento: AcompanhamentoDto) {

        this.acompanhamento = {...acompanhamento};
        this.acompanhamentoDialog = true;
    }

    deleteacompanhamento(acompanhamento: AcompanhamentoDto) {
        this.confirmationService.confirm({
            message: 'Tem certeza que deseja excluir ' + acompanhamento.descricao + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
              //codigo para excluir
                this.acompanhamento = {id:'', descricao: '', kg: '',tipoAcompanhamento: '', valorUn:'',valorTotal:''};
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'acompanhamento Excluido', life: 3000});
            }
        });
    }

    hideDialog() {
        this.acompanhamentoDialog = false;
        this.submitted = false;
    }

    saveacompanhamento() {
      this.acompanhamentoDialog = false;
      this.submitted = true;

      this.serviceResurce.manterAcompanhamento(this.acompanhamento).subscribe
      (
       success =>{
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'acompanhamento Salvo', life: 3000});
       },
          error => {

           this.messageService.add({severity:'error', summary: 'Error', detail: 'Error', life: 3000});
          return '';
    }
      )
  }

  findIndexById(id: string): number {
      let index = -1;
      // for (let i = 0; i < this.acompanhamentos.length; i++) {
      //     if (this.acompanhamentos[i].id === id) {
      //         index = i;
      //         break;
      //     }
      // }

      return index;
  }

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }





}
