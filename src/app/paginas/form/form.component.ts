import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServico } from 'src/app/servicos/clienteServico';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private router:Router) { }

  public titulo:String = "Novo cliente" 
  public cliente: Cliente = {} as Cliente  // propriedade Cliente
  public valor: String = "" // para preencher com R$ no input



  ngOnInit(): void {  // quando inicia o model view, é feito tudo que está nesse bloco
    //this.cliente = this.clientes[0]
  }

  salvar() {    // essa classe vai adicionar os dados 
    ClienteServico.adicionarCliente({ id: 0,
      nome: this.cliente.nome,
      telefone: this.cliente.telefone,
      endereco: this.cliente.endereco,
      data: new Date(),
      valor: this.convertNumber(this.valor),
      cpf: "45678945612"}) ; 
      
      this.router.navigateByUrl("/listaCliente")

      //.push inclui o item/cadatro
    //alert(JSON.stringify(this.cliente))  // json- mostra na tela o conteudo do cliente
  }

  private convertNumber(valor: String): Number {
    let valorMatch = valor.match(/\d|\.|,/g)
    if (valorMatch == null) return 0
    let valorBrasileiro = valorMatch.join("")
    let valorAmericano = valorBrasileiro.replace(".", "").replace(",", ".")
    return Number(valorAmericano)
  }

  somenteNumeros() {
    let valorMatch = this.valor.match(/\d|\.|,/g)
    if (valorMatch == null) {
      this.valor = ""
      return
    }

    this.valor = valorMatch.join("")
  }


  mascara() {
    let valorFloat = Number(this.valor)
    this.valor = valorFloat.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    this.valor = this.valor
  }
}
