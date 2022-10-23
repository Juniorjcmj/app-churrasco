import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AcompanhamentoComponent } from '../acompanhamento.component';
import { fromEvent, Observable } from 'rxjs';
import { EventEmitterService } from '../event-emitter';
import { AcompanhamentoService } from '../Acompanhamento.service';

@Component({
  selector: 'app-acompanhamento-form',
  templateUrl: './acompanhamento-form.component.html',
  styleUrls: ['./acompanhamento-form.component.scss']
})
export class AcompanhamentoFormComponent implements OnInit {

 @ViewChild(AcompanhamentoComponent, { static: false })
  teste!: AcompanhamentoComponent;

  constructor(private serviceResurce: AcompanhamentoService) {

  }



  ngOnInit(): void {

  }

}
