import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SalvarBolsaComponent } from './pages/bolsa/salvar-bolsa/salvar-bolsa.component';
import { DetalheBolsaComponent } from './pages/bolsa/detalhe-bolsa/detalhe-bolsa.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'bolsa/salvar', component: SalvarBolsaComponent},
  { path: 'bolsa/detalhe/:id', component: DetalheBolsaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
