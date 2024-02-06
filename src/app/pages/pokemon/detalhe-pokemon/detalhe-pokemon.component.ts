import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonApiResponse } from 'src/app/shared/model/response/pokemonApi';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { environment } from 'src/environments/environment';
import { DataUtil } from 'src/app/shared/utils/dataUtil';

@Component({
  selector: 'app-detalhe-pokemon',
  templateUrl: './detalhe-pokemon.component.html',
  styleUrls: ['./detalhe-pokemon.component.css']
})
export class DetalhePokemonComponent implements OnInit {

  pokemon: PokemonApiResponse = new PokemonApiResponse();

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    let nome = this.activatedRoute.snapshot.paramMap.get('nome')!;
    this.getDetalhePokemon(nome);
  }


  getDetalhePokemon(nome: string = '') {
    this.pokemonService.getPokemon(nome).subscribe(
      (data: PokemonApiResponse) => {
        this.pokemon = data;
      },
      (erro) => {
        this.toastr.error('Erro ao buscar os dados do pokémon na PokéApi!');
      }
    )
  }

  get urlFoto() {
    return `${environment.apiPokePicture}/${DataUtil.adicionaZerosAEsquerda(this.pokemon.id)}.png`;
  }
}
