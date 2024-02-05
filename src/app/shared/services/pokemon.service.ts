import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DadosPokemonApiResponse } from '../model/response/dadosPokemonApi';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly BASE_POKE_API: string = environment.apiPoke;

  constructor(public http: HttpClient) { }

  getListPokemon(path?: string): Observable<DadosPokemonApiResponse> {
    let url: string = path ? `${path}`: `${this.BASE_POKE_API}`
    return this.http.get<DadosPokemonApiResponse>(url)
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }
}
