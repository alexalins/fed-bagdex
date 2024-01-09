import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'app-card-list-pokemon',
  templateUrl: './card-list-pokemon.component.html',
  styleUrls: ['./card-list-pokemon.component.css']
})
export class CardListPokemonComponent implements OnInit {

  @Input() listaPokemon: Pokemon[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
