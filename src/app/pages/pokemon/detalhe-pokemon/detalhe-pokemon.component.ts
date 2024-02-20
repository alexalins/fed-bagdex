import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonApiResponse } from 'src/app/shared/model/response/pokemonApi';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { environment } from 'src/environments/environment';
import { DataUtil } from 'src/app/shared/utils/dataUtil';
import { Constants } from 'src/app/shared/utils/constants';
import { BolsaService } from 'src/app/shared/services/bolsa.service';
import { Pokemon } from 'src/app/shared/model/pokemon';

@Component({
  selector: 'app-detalhe-pokemon',
  templateUrl: './detalhe-pokemon.component.html',
  styleUrls: ['./detalhe-pokemon.component.css']
})
export class DetalhePokemonComponent implements OnInit {

  pokemon: PokemonApiResponse = new PokemonApiResponse();
  id: number = 0;
  isEdit: boolean = false;
  isExcluir: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private toastr: ToastrService,
    private bolsaService: BolsaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.id = parseInt(id);
    let nome = this.activatedRoute.snapshot.paramMap.get('nome')!;
    let isEdit = this.activatedRoute.snapshot.queryParamMap.get("isEdit");
    this.isEdit = !isEdit;

    this.getDetalhePokemon(nome);
  }

  getDetalhePokemon(nome: string = '') {
    this.pokemonService.getPokemon(nome).subscribe(
      (data: PokemonApiResponse) => {
        if(data) {
          this.montarPokemonApi(data);
        }
      },
      (erro) => {
        this.toastr.error('Erro ao buscar os dados do pokémon na PokéApi!');
      }
    )
  }

  montarPokemonApi(data: PokemonApiResponse) {
    this.pokemon.id = data.id;
    this.pokemon.height = data.height;
    this.pokemon.name = data.name;
    this.pokemon.setStats(data.stats);
    this.pokemon.setTypes(data.types);
  }

  montarPokemonDto() {
    let myPokemon = new Pokemon();
    myPokemon.id = this.pokemon.id;
    myPokemon.nome = this.pokemon.name;
    myPokemon.foto = this.urlFoto;
    return myPokemon;
  }

  salvarPokemon() {
    let myPokemon = this.montarPokemonDto();

    this.bolsaService.salvarPokemonBolsa(this.id, myPokemon).subscribe(
      (data) => {
        this.toastr.success('Pokémon salvo com sucesso!');
        this.router.navigateByUrl(`bolsa/detalhe/${this.id}`);
      },
      (erro) => {
        this.toastr.error('Erro ao buscar os dados do pokémon na PokéApi!');
      }
    )
  }

  modalExcluir(){
    this.isExcluir = !this.isExcluir;
  }


  deletarPokemon() {
    let myPokemon = this.montarPokemonDto();

    this.bolsaService.deletarPokemonBolsa(this.id, myPokemon).subscribe(
      (data) => {
        this.toastr.success('Pokémon excluido com sucesso!');
        this.router.navigateByUrl(`bolsa/detalhe/${this.id}`)
      },
      (erro) => {
        this.toastr.error('Não foi possível excluir o pokémon!');
      }
    )
  }

  get urlFoto() {
    return `${environment.apiPokePicture}/${DataUtil.adicionaZerosAEsquerda(this.pokemon.id)}.png`;
  }

  get tipo() {
    if(this.isEdit) {
      return Constants.BOTAO_DELETAR_POKEMON_EM_BAG;
    }
    return Constants.BOTAO_SALVAR_POKEMON_EM_BAG;
  }
}
