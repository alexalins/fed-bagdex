import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/shared/model/request/login';
import { LoginResponse } from 'src/app/shared/model/response/login';
import { TreinadorService } from 'src/app/shared/services/treinador.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private treinadorService: TreinadorService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    senha: new FormControl('', [Validators.minLength(4), Validators.required]),
  });

  login() {
    let email = this.formLogin.get('email')?.value;
    let senha = this.formLogin.get('senha')?.value;

    let login: LoginRequest = new LoginRequest(email, senha);
    this.treinadorService.login(login).subscribe(
      (data: LoginResponse) => {
        sessionStorage.setItem('token', data.token);
        this.router.navigateByUrl('/inicio');
      },
      (error) => {
        console.log(error)
        this.toastr.error('Erro ao realizar o login!');
      }
    );
  }

  get formPreenchido() {
    return (
      this.formLogin.controls['email'].errors?.['required'] &&
      this.formLogin.controls['email'].touched &&
      this.formLogin.controls['senha'].errors?.['required'] &&
      this.formLogin.controls['senha'].touched
    );
  }
}
