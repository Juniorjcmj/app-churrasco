import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Acompanhamento } from './acompanhamento';
import { AcompanhamentoService } from './Acompanhamento.service';
import { TipoAcompanhamento } from '../tipo-acompanhamento/tipoAcompanhamento';



@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss'],

  providers: [MessageService,ConfirmationService]
})
export class AcompanhamentoComponent implements OnInit {

  acompanhamentoDialog!: boolean;

  acompanhamentos!: Acompanhamento[];

  acompanhamento!: Acompanhamento;

  selectedAcompanhamento!: Acompanhamento[];

  submitted!: boolean;

  statuses!: any[];

  constructor( private messageService: MessageService,
    private confirmationService: ConfirmationService,
     private serviceResurce: AcompanhamentoService ){

  //  this.acompanhamentos = [{id:'1', descricao: 'Salada', kg: '2,6',tipoAcompanhamento: 'Vegano', valorUn:'2,7',valorTotal:'15,99'},
  //                           { id:'2', descricao: 'Canjiquinha', kg: '8',tipoAcompanhamento: 'Doce', valorUn:'1,4',valorTotal:'13,7'}]

  this.serviceResurce.getAll().subscribe(
    (data: any) => {
      this.acompanhamentos = data;
    }
  )
  this.serviceResurce.getAllTipo().subscribe(
    (data: any) => {
      this.statuses = data;
    }
  )

   }

  ngOnInit(): void {
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
                this.acompanhamentos = this.acompanhamentos.filter(val => !this.selectedAcompanhamento.includes(val));
                this.selectedAcompanhamento = [];
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'acompanhamentos Deleted', life: 3000});
            }
        });
    }

    editacompanhamento(acompanhamento: Acompanhamento) {
      console.log(acompanhamento)
        this.acompanhamento = {...acompanhamento};
        this.acompanhamentoDialog = true;
    }

    deleteacompanhamento(acompanhamento: Acompanhamento) {
        this.confirmationService.confirm({
            message: 'Tem certeza que deseja excluir ' + acompanhamento.descricao + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.acompanhamentos = this.acompanhamentos.filter(val => val.id !== acompanhamento.id);
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
      this.submitted = true;

      if (this.acompanhamento.descricao.trim()) {
          if (this.acompanhamento.id) {
              this.acompanhamentos[this.findIndexById(this.acompanhamento.id)] = this.acompanhamento;
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'acompanhamento Updated', life: 3000});
          }
          else {
              this.acompanhamento.id = this.createId();
            //  this.acompanhamento.image = 'acompanhamento-placeholder.svg';
              this.acompanhamentos.push(this.acompanhamento);
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'acompanhamento Created', life: 3000});
          }

          this.acompanhamentos = [...this.acompanhamentos];
          this.acompanhamentoDialog = false;
          this.acompanhamento = {id:'', descricao: '', kg: '',tipoAcompanhamento: '', valorUn:'',valorTotal:''};
      }
  }

  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.acompanhamentos.length; i++) {
          if (this.acompanhamentos[i].id === id) {
              index = i;
              break;
          }
      }

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
