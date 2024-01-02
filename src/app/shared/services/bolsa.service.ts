import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TreinadorRequest } from '../model/request/treinador';
import { Observable, catchError, throwError } from 'rxjs';
import { Bolsa } from '../model/bolsa';
import { TokenUtil } from '../utils/tokenUtil';

@Injectable({
  providedIn: 'root'
})
export class BolsaService {

  apiUrl = environment.apiUrl + '/bolsa';

  constructor(public http: HttpClient) { }

  getBolsaDoTreinador(treinador: TreinadorRequest): Observable<Bolsa> {
    const headers = TokenUtil.getHeaders();

    return this.http.post<Bolsa>(`${this.apiUrl}/treinador`, treinador, { headers })
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }
}
