import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertaComponent } from './shared/components/alerta/alerta.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    AlertaComponent,
    HeaderComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastContainerModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      disableTimeOut: false,
      timeOut: 2500,
      closeButton: true,
      enableHtml: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
