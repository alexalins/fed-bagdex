import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  @Input() pokemon: Pokemon = new Pokemon();

  constructor() { }

  ngOnInit(): void {
  }

}
