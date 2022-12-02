import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { FormatarTelefonePipe } from './pipes/formatar-telefone.pipe';
import { registerLocaleData } from '@angular/common';
import ptBR from '@angular/common/locales/pt';
import { FormatarCpfPipe } from './pipes/formatar-cpf.pipe';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './paginas/form/form.component';
import { ListaComponent } from './paginas/lista/lista.component';
import { ClientesNotificacaoComponent } from './componentes/clientes-notificacao/clientes-notificacao.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { PortfolioComponent } from './paginas/portfolio/portfolio.component';
import { NaoEncontradaComponent } from './paginas/nao-encontrada/nao-encontrada.component';
import {HttpClientModule} from '@angular/common/http'

registerLocaleData(ptBR);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormatarTelefonePipe,
    FormatarCpfPipe,
    FormComponent,
    ListaComponent,
    ClientesNotificacaoComponent,
    SobreComponent,
    PortfolioComponent,
    NaoEncontradaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  //importado para poder usa o ngModel
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'},
      {provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
