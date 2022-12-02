import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteObserverServicoService } from 'src/app/servicos/clienteObserverServico.service';

@Component({
  selector: 'app-clientes-notificacao',
  templateUrl: './clientes-notificacao.component.html',
  styleUrls: ['./clientes-notificacao.component.css']
})
export class ClientesNotificacaoComponent {

  constructor(public clienteObserverServicoService: ClienteObserverServicoService){
    
  }

ngOnInit():void{

}


}
