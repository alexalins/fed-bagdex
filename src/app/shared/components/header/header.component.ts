import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  readonly URL_LOGIN = '/login';
  readonly URL_CADASTRO = '/cadastro';

  caminhoImagem: string = '../../../../assets/image/pokebola.png';
  titulo: string = 'Bagdex';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get isTelaSemBotaoSair() {
    const currentRoute = this.router.url;
    return currentRoute === this.URL_LOGIN || currentRoute === this.URL_CADASTRO;
  }
}
