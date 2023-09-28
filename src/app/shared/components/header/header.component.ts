import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  readonly URL_CADASTRO = 'cadastro'

  caminhoImagem: string = '../../../../assets/image/pokebola.png';
  titulo: string = 'Bagdex';
  currentPath: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentPath = this.router.url;
    this.currentPath = this.router.url.substring(1);
    console.log(this.currentPath);
  }

  get isTelaSemBotaoSair() {
    return this.currentPath != '' || this.currentPath.includes(this.URL_CADASTRO);
  }
}
