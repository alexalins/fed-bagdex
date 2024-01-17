import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bolsa } from 'src/app/shared/model/bolsa';
import { BolsaService } from 'src/app/shared/services/bolsa.service';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-detalhe-bolsa',
  templateUrl: './detalhe-bolsa.component.html',
  styleUrls: ['./detalhe-bolsa.component.css'],
})
export class DetalheBolsaComponent implements OnInit {
  bolsa: Bolsa = new Bolsa();
  idBolsa: number = 0;

  constructor(
    private bolsaService: BolsaService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.idBolsa = id ? Number.parseInt(id) : 0;
    this.getDetalhesBolsa();
  }

  getDetalhesBolsa() {
    this.bolsaService
      .getBolsaById(this.idBolsa)
      .toPromise()
      .then(
        (data: any) => {
          this.bolsa = data;
        },
        (error) => {
          this.toastr.error('Erro ao carregar dados da Bag!');
        }
      );
  }

  get tipo() {
    return Constants.BOTAO_INCLUIR_POKEMON;
  }
}
