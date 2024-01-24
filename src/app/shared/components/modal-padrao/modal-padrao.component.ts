import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-padrao',
  templateUrl: './modal-padrao.component.html',
  styleUrls: ['./modal-padrao.component.css']
})
export class ModalPadraoComponent {

  @Input() title: string = '';
  @Input() text: string = '';
  @Input() buttonAction: string = '';
  @Output() onAlert = new EventEmitter();


  closeModal(e: object) {
    this.onAlert.emit(e);
  }

}
