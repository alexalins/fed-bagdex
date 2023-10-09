import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-bag',
  templateUrl: './card-bag.component.html',
  styleUrls: ['./card-bag.component.css']
})
export class CardBagComponent implements OnInit {

  @Input() titulo: string = ''
  @Input() descricao: string = ''
  @Input() data: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
