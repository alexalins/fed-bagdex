import { AfterViewChecked, Component, Input } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { FiltroPorNomePipe } from '../../pipes/filtro-por-nome.pipe';

@Component({
  selector: 'app-card-list-pokemon',
  templateUrl: './card-list-pokemon.component.html',
  styleUrls: ['./card-list-pokemon.component.css']
})
export class CardListPokemonComponent implements AfterViewChecked {

  @Input() listaPokemon: Pokemon[] = [];
  @Input() idBolsa: number = 0;

  listaPokemonAux: Pokemon[] = [];
  filtro: string = '';
  pageSize = 16;
  currentPage = 1;
  displayedData: Pokemon[] = [];

  constructor(private pipeFiltro: FiltroPorNomePipe) {}

  ngAfterViewChecked() {
   if(this.listaPokemon.length) {
    this.listaPokemonAux = this.pipeFiltro.transform(this.listaPokemon, this.filtro);
    this.updateDisplayedData();
   }
  }

  updateDisplayedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedData = this.listaPokemonAux.slice(startIndex, endIndex);
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
    return Math.ceil(this.listaPokemonAux.length / this.pageSize);
  }

}
