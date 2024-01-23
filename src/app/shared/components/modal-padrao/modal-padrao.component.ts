import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-padrao',
  templateUrl: './modal-padrao.component.html',
  styleUrls: ['./modal-padrao.component.css']
})
export class ModalPadraoComponent implements OnInit {

  @Input() title: string = '';
  @Input() text: string = '';
  @Input() buttonAction: string = '';
  @Input() showModal: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }


  closeModal() {
    this.showModal = false;
  }

}
