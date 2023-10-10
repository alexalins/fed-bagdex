import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bolsa } from 'src/app/shared/model/bolsa';
import { BolsaService } from 'src/app/shared/services/bolsa.service';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  bolsas: Bolsa[] = [];

  constructor(private toastr: ToastrService, private router: Router, private bolsaService: BolsaService) { }

  ngOnInit(): void {
    this.getBolsas();
  }

  getBolsas() {
    this.bolsaService.getBolsaDoTreinador(this.treinador).toPromise().then(
      (data: any) => {
        console.log(data);
        this.bolsas = data;
      },
      (error) => {
        console.log(error);
        this.toastr.error('Erro ao recupar as bags do usuário!');
      }
    )
  }

  get treinador() {
    let treinador = sessionStorage.getItem(Constants.KEY_TREINADOR);
    return treinador != null ? JSON.parse(treinador) : '';
  }

  get tipo() {
    return Constants.BOTAO_INCLUIR;
  }
}
