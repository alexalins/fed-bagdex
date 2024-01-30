import { DadosPokemonApiResponse } from 'src/app/shared/model/response/dadosPokemonApi';
import { PokemonService } from './../../../shared/services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {

  dadosListaPokemon: DadosPokemonApiResponse = new DadosPokemonApiResponse();

  constructor(private pokemonService: PokemonService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getListPokemon();
  }

  getListPokemon() {
    this.pokemonService.getListPokemon().subscribe(
      (data: DadosPokemonApiResponse) => {
        this.dadosListaPokemon = data;
      },
      (error) => {
        this.toastrService.error('Não foi possível retornar dados da PokéApi!')
      }
    )
  }

}
