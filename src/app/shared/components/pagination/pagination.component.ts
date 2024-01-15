import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Output() pageChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changePage(action: string) {
    this.pageChanged.emit(action);
  }

}
