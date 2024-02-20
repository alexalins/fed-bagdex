import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  caminhoImagem: string = '../../../../assets/image/pokebola.png';
  titulo: string = 'Bagdex';

  constructor(private router: Router) { }

  get isTelaSemBotaoSair() {
    const currentRoute = this.router.url;
    return currentRoute === Constants.URL_LOGIN || currentRoute === Constants.URL_CADASTRO;
  }

  sair() {
    sessionStorage.removeItem(Constants.KEY_TREINADOR)
    sessionStorage.removeItem(Constants.KEY_TOKEN);
    this.router.navigateByUrl(Constants.URL_LOGIN);
  }
}
