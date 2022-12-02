import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { FormComponent } from './paginas/form/form.component';
import { ListaComponent } from './paginas/lista/lista.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { PortfolioComponent } from './paginas/portfolio/portfolio.component';
import { NaoEncontradaComponent } from './paginas/nao-encontrada/nao-encontrada.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form', component: FormComponent},
  {path: 'listaCliente', component: ListaComponent },
  {path: 'form-alterar/:id', component: FormComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '**', component: NaoEncontradaComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
