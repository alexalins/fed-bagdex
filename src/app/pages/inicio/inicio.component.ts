import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bolsa } from 'src/app/shared/model/Bolsa';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  bolsas: Bolsa[] = [];

  constructor(private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    let bolsa = new Bolsa('Bolsa mock', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum aliquam lorem, dapibus finibus diam bibendum in. Duis non orci condimentum, consectetur dolor ac, tincidunt sem. Sed non congue ligula, et porttitor risus. Maecenas a justo ut sem molestie volutpat ac quis lectus. Vivamus quis congue quam',
     "ESTOU_PROCURANDO", "09/10/2023", [])
    this.bolsas.push(bolsa)
  }

  get treinador() {
    let treinador = sessionStorage.getItem(Constants.KEY_TREINADOR);
    return treinador != null ? JSON.parse(treinador) : '';
  }
}
