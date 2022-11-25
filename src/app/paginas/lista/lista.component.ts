import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServico } from 'src/app/servicos/clienteServico';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  constructor( private router:Router){
    
  }

  ngOnInit(): void {

  }

  public clientes:Cliente[] = ClienteServico.buscaClientes()   // tipagem "Cliente" feita em models - cliente.ts (interface)


  novo(){
    this.router.navigateByUrl("/form") // envia para o formulario
  }

}
