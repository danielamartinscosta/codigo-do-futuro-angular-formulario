import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {}

  public cliente:Cliente = {} as Cliente  // propriedade Cliente

  public valor:String = "" // para preencher com R$ no input

  public clientes:Cliente[] = [   // tipagem "Cliente" feita em models - cliente.ts (interface)

    {id: 1 , nome: "Luana", telefone:"11987654321", endereco: "Rua Oliveira", data: new (Date), valor: 33.55, cpf:"33355589810"},
    {id: 2 , nome: "Marcio", telefone:"11235641245", endereco: "Av. Faria Lima", data: new (Date), valor: 45.62, cpf:"65498712356"},
    {id: 3 , nome: "Renato", telefone:"11897541236", endereco: "Rua Bragança da Silva", data: new (Date), valor: 55.20, cpf:"65478912312"},

  ]

  ngOnInit(): void {  // quando inicia o model view, é feito tudo que está nesse bloco
    //this.cliente = this.clientes[0]
  }

  clicou(){
    let id = this.clientes.length + 1 
    let novoCliente: Cliente = {  
      id:id,
      nome: this.cliente.nome,
      telefone: this.cliente.telefone,
      endereco: this.cliente.endereco,
      data: new Date(),
      valor: this.cliente.valor,
      cpf:"45678945612"
  
  } as Cliente
    this.clientes.push(novoCliente) //.push inclui o item/cadatro

    //alert(JSON.stringify(this.cliente))  // json- mostra na tela o conteudo do cliente
  
  }


  mascara(){
    let valorFloat = Number(this.valor.replace(/R\$ /, ""))
    this.valor = valorFloat.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    this.valor = this.valor
  }

}
