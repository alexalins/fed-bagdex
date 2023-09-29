import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.minLength(4), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    senha: new FormControl('', [Validators.minLength(4), Validators.required]),
  });

  cadastrar() {

  }

  get formPreenchido() {
    return (
      this.formCadastro.controls['nome'].errors?.['required'] &&
      this.formCadastro.controls['nome'].touched ||
      this.formCadastro.controls['email'].errors?.['required'] &&
      this.formCadastro.controls['email'].touched ||
      this.formCadastro.controls['senha'].errors?.['required'] &&
      this.formCadastro.controls['senha'].touched
    );
  }
}
