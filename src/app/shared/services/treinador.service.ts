import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../model/request/login';
import { LoginResponse } from '../model/response/login';
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreinadorService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(login: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, login)
      .pipe(
        catchError( e => {
          throw new Error(e);
        })
      );
  }
}
