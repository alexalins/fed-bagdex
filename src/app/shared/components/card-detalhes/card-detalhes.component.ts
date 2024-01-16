import { Component, Input, OnInit } from '@angular/core';
import { Bolsa } from '../../model/bolsa';

@Component({
  selector: 'app-card-detalhes',
  templateUrl: './card-detalhes.component.html',
  styleUrls: ['./card-detalhes.component.css']
})
export class CardDetalhesComponent implements OnInit {

  @Input() bolsa: Bolsa = new Bolsa();

  constructor() { }

  ngOnInit(): void {
  }

}
