import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label:'Home',
        icon:'pi pi-fw pi-home',
        routerLink: '/home',

    },

        {

            label:'Orçamento',
            icon:'pi pi-fw pi-calculator',
            items:[
                {
                    label:'Em Andamento',
                    icon:'pi pi-fw pi-thumbs-up'
                },
                {
                    label:'Fechados',
                    icon:'pi pi-fw pi-thumbs-up-fill'
                },
                {
                    label:'Concluido',
                    icon:'pi pi-fw pi-dollar'
                },
                {
                    label:'Cancelados',
                    icon:'pi pi-fw pi-thumbs-down-fill'
                },

            ]
        },
        {
            label:'Usuários',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'Novo',
                    icon:'pi pi-fw pi-user-plus',

                },
                {
                    label:'Lista',
                    icon:'pi pi-fw pi-book',

                },

            ]
        },
        {
            label:'Configuração',
            icon:'pi pi-fw pi-cog',

            items:[
                {
                    label:'Acompanhamento',
                    icon:'pi pi-fw pi-chart-pie',
                    routerLink: '/acompanhamento',

                },
                {
                    label:'Bebidas',
                    icon:'pi pi-fw pi-filter-fill',
                    routerLink: '/bebidas',
                },
                {
                    label:'Carnes',
                    icon:'pi pi-fw pi-image',
                    routerLink: '/carnes',
                },
                {
                    label:'Consumo por Pessoa',
                    icon:'pi pi-fw pi-chart-bar',
                    routerLink: '/consumo-pessoa',
                },
                {
                  label:'Tipo Acompanhamento',
                  icon:'pi pi-fw pi-reddit',
                  routerLink: '/tipo-acompanhamento',

              },
              {
                  label:'Tipo de Corte',
                  icon:'pi pi-fw pi-pencil',
                  routerLink: '/tipo-corte',
              },
              {
                  label:'Unidade',
                  icon:'pi pi-fw pi-eye',
                  routerLink: '/unidade',
              }
            ]
        },

    ];
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
