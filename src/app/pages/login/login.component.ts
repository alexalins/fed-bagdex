import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    senha: new FormControl('', [Validators.minLength(4), Validators.required])
  });

  login() {
    console.log("login");
  }

  get formPreenchido() {
    return (this.formLogin.controls['email'].errors?.['required'] && this.formLogin.controls['email'].touched) &&
    (this.formLogin.controls['senha'].errors?.['required'] && this.formLogin.controls['senha'].touched) ;
  }

}
