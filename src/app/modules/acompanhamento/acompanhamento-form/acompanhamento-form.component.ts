import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acompanhamento-form',
  templateUrl: './acompanhamento-form.component.html',
  styleUrls: ['./acompanhamento-form.component.scss']
})
export class AcompanhamentoFormComponent implements OnInit {

  disabled: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
