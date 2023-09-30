import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.toastr.success('Login realizado com sucesso!');
  }

  get treinador() {
    let treinador = sessionStorage.getItem(Constants.KEY_TREINADOR);
    return treinador != null ? JSON.parse(treinador) : '';
  }
}
