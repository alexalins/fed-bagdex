import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'alerta-error',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  @Input() mensagem: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
