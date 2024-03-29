import { DadosPokemonApiResponse } from 'src/app/shared/model/response/dadosPokemonApi';
import { PokemonService } from './../../../shared/services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonApiResponse } from 'src/app/shared/model/response/pokemonApi';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css'],
})
export class ListaPokemonComponent implements OnInit {
  dadosListaPokemon: DadosPokemonApiResponse = new DadosPokemonApiResponse();
  id: string = '';

  constructor(
    private pokemonService: PokemonService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.id)
    this.getListPokemon();
  }

  getListPokemon(path: string = '') {
    this.pokemonService.getListPokemon(path).subscribe(
      (data: DadosPokemonApiResponse) => {
        this.dadosListaPokemon = data;
      },
      (error) => {
        this.toastrService.error('Não foi possível retornar dados da PokéApi!');
      }
    );
  }

  getPokemon(nome: string) {
    this.pokemonService.getPokemon(nome).subscribe(
      (data: PokemonApiResponse) => {
        if (data) {
          this.dadosListaPokemon = new DadosPokemonApiResponse();
          this.dadosListaPokemon.results.push(data);
        }
      },
      (error) => {
        this.toastrService.error('Não foi possível retornar dados da PokéApi!');
      }
    );
  }

  mudarLista(value: any) {
    if (value.url) {
      this.getListPokemon(value.url);
    } else if (value.nome) {
      this.getPokemon(value.nome);
    }
  }
}
