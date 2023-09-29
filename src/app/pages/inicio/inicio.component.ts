import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.toastr.success('Login realizado com sucesso!');
  }

}
