import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TreinadorRequest } from '../model/request/treinador';
import { Observable, catchError, throwError } from 'rxjs';
import { Bolsa } from '../model/bolsa';
import { TokenUtil } from '../utils/tokenUtil';
import { BolsaRequest } from '../model/request/bolsa';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root',
})
export class BolsaService {
  apiUrl = environment.apiUrl + '/bolsa';

  constructor(public http: HttpClient) {}

  getBolsaDoTreinador(treinador: TreinadorRequest): Observable<Bolsa> {
    const headers = TokenUtil.getHeaders();

    return this.http
      .post<Bolsa>(`${this.apiUrl}/treinador`, treinador, { headers })
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }

  salvar(bolsa: BolsaRequest): Observable<any> {
    const headers = TokenUtil.getHeaders();
    return this.http
      .post<any>(`${this.apiUrl}/salvar`, bolsa, { headers })
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }

  getBolsaById(id: number): Observable<Bolsa> {
    const headers = TokenUtil.getHeaders();

    return this.http.get<Bolsa>(`${this.apiUrl}/${id}`, { headers }).pipe(
      catchError((e) => {
        return throwError(e);
      })
    );
  }

  editar(bolsa: BolsaRequest): Observable<any> {
    const headers = TokenUtil.getHeaders();
    return this.http
      .put<any>(`${this.apiUrl}/editar/${bolsa.id}`, bolsa, { headers })
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }

  deletar(id: number): Observable<any> {
    const headers = TokenUtil.getHeaders();
    return this.http
      .delete<any>(`${this.apiUrl}/${id}`, { headers })
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }

  salvarBolsa(bolsa: BolsaRequest): Observable<any> {
    if(bolsa?.id) {
      return this.editar(bolsa);
    } else {
      return this.salvar(bolsa)
    }
  }

  salvarPokemon(idBolsa: number, pokemon: Pokemon): Observable<any> {
    const headers = TokenUtil.getHeaders();
    return this.http
      .put<any>(`${this.apiUrl}/save/pokemon/${idBolsa}`, pokemon, { headers })
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }
}
