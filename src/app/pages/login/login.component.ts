import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    senha: new FormControl('', [Validators.minLength(4), Validators.required])
  });

  login() {
    this.router.navigate(['/inicio']);
    console.log("login");
  }

  get formPreenchido() {
    return (this.formLogin.controls['email'].errors?.['required'] && this.formLogin.controls['email'].touched) &&
    (this.formLogin.controls['senha'].errors?.['required'] && this.formLogin.controls['senha'].touched) ;
  }

}
