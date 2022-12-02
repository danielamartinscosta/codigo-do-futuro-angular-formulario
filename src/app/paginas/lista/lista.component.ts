import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteObserverServicoService } from 'src/app/servicos/clienteObserverServico.service';
import { ClienteServico } from 'src/app/servicos/clienteServico';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  constructor( 
    private http:HttpClient,
    private router:Router,
    private clienteObserverServicosService: ClienteObserverServicoService
    ){
    
  }

  ngOnInit(): void {
    this.clienteServico = new ClienteServico(this.http)
    this.listaClientes()
  }


  private clienteServico:ClienteServico = {} as ClienteServico
  public clientes:Cliente[] | undefined = []   // tipagem "Cliente" feita em models - cliente.ts (interface)

  private async listaClientes() {
    this.clientes = await this.clienteServico.lista();

  }

  novo(){
    this.router.navigateByUrl("/form") // envia para o formulario
  }

  async excluir(cliente:Cliente){
    if(confirm("Confirma?")){
    await this.clienteServico.excluirPorId(cliente.id)
    this.clientes = await  this.clienteServico.lista()
    this.clienteObserverServicosService.atualizaQuantidade();
  }
}


}
