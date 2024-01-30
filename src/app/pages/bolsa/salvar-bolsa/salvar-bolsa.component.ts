import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bolsa } from 'src/app/shared/model/bolsa';
import { BolsaRequest } from 'src/app/shared/model/request/bolsa';
import { Treinador } from 'src/app/shared/model/treinador';
import { BolsaService } from 'src/app/shared/services/bolsa.service';
import { Constants } from 'src/app/shared/utils/constants';
import { DataUtil } from 'src/app/shared/utils/dataUtil';
import { ValidacoesUtil } from 'src/app/shared/utils/validacoesUtil';

@Component({
  selector: 'app-salvar-bolsa',
  templateUrl: './salvar-bolsa.component.html',
  styleUrls: ['./salvar-bolsa.component.css']
})
export class SalvarBolsaComponent implements OnInit {
  campos: string [] = [Constants.FORM_NOME, Constants.FORM_TIPO];
  idBolsa: number = 0;
  bolsa: Bolsa = new Bolsa();

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.minLength(4), Validators.required, ValidacoesUtil.noWhitespaceValidator]),
    descricao: new FormControl(''),
    tipo: new FormControl('', Validators.required),
  })

  constructor(
    private bolsaService: BolsaService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.idBolsa = id ? Number.parseInt(id) : 0;
    if(this.idBolsa != 0) {
      this.getDetalhesBolsa();
    }
  }

  salvar() {
    let bolsa: BolsaRequest = this.montarRequest();
    this.bolsaService.salvarBolsa(bolsa).subscribe(
      (data: BolsaRequest) => {
        this.toastr.success('Bag salva com sucesso!');
        this.router.navigateByUrl(Constants.URL_INICIO);
      },
      (error) => {
        this.toastr.error('Erro ao salvar bag!');
      }
    );
  }

  getDetalhesBolsa() {
    this.bolsaService
      .getBolsaById(this.idBolsa)
      .toPromise()
      .then(
        (data: any) => {
          this.bolsa = data;
          this.montarFormBolsa();
        },
        (error) => {
          this.toastr.error('Erro ao carregar dados da Bag!');
        }
      );
  }

  montarRequest(): BolsaRequest {
    let nome = this.formCadastro.get(Constants.FORM_NOME)?.value;
    let descricao = this.formCadastro.get(Constants.FORM_DESCRICAO)?.value;
    let tipo = this.formCadastro.get(Constants.FORM_TIPO)?.value;
    let treinador: Treinador = DataUtil.getUserLogado();
    let bolsa = new BolsaRequest( nome, descricao, tipo, treinador);
    bolsa.id = this.bolsa.id;
    return bolsa;
  }

  montarFormBolsa() {
    this.formCadastro.get(Constants.FORM_NOME)?.setValue(this.bolsa.nome);
    this.formCadastro.get(Constants.FORM_DESCRICAO)?.setValue(this.bolsa.descricao);
    this.formCadastro.get(Constants.FORM_TIPO)?.setValue(this.bolsa.tipo);
  }

  get formPreenchido() {
    return ValidacoesUtil.isFormValidacao(this.campos, this.formCadastro);
  }

  get formPreenchidoSemEspaco() {
    return ValidacoesUtil.isFormValidacao([Constants.FORM_NOME], this.formCadastro, 'whitespace');
  }
}
