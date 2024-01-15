import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'app-card-list-pokemon',
  templateUrl: './card-list-pokemon.component.html',
  styleUrls: ['./card-list-pokemon.component.css']
})
export class CardListPokemonComponent implements OnInit, AfterViewChecked {

  @Input() listaPokemon: Pokemon[] = [];

  filtro: string = '';
  pageSize = 16;
  currentPage = 1;
  displayedData: Pokemon[] = [];

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
   if(this.listaPokemon.length) {
    this.updateDisplayedData();
   }
  }

  updateDisplayedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedData = this.listaPokemon.slice(startIndex, endIndex);
  }

  onPageChanged(action: string) {
    if (action === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    } else if (action === 'next' && this.currentPage < this.totalPages) {
      this.currentPage++;
    }

    this.updateDisplayedData();
  }

  get totalPages() {
    return Math.ceil(this.listaPokemon.length / this.pageSize);
  }

}
