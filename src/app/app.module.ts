import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormatarTelefonePipe } from './pipes/formatar-telefone.pipe';
import { registerLocaleData } from '@angular/common';
import ptBR from '@angular/common/locales/pt';
import { FormatarCpfPipe } from './pipes/formatar-cpf.pipe';
import { FormsModule } from '@angular/forms';

registerLocaleData(ptBR);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormatarTelefonePipe,
    FormatarCpfPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  //importado para poder usa o ngModel
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
