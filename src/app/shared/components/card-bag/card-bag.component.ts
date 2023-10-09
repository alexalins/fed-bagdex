import { Component, Input, OnInit } from '@angular/core';
import { Bolsa } from '../../model/Bolsa';

@Component({
  selector: 'card-bag',
  templateUrl: './card-bag.component.html',
  styleUrls: ['./card-bag.component.css']
})
export class CardBagComponent implements OnInit {

  @Input() bolsa!: Bolsa

  constructor() { }

  ngOnInit(): void {
  }

}
