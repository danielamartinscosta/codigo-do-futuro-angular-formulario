import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteObserverServicoService } from 'src/app/servicos/clienteObserverServico.service';
import { ClienteServico } from 'src/app/servicos/clienteServico';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {


  //As injeções são feitas no Construtor
  constructor(
    private router: Router,
    private Http: HttpClient,
    private routerParams: ActivatedRoute,
    private clienteObserverServicoService: ClienteObserverServicoService) { }


  private clienteServico: ClienteServico = {} as ClienteServico
  public titulo: String = "Novo cliente"
  public cliente: Cliente | undefined= {} as Cliente  // propriedade Cliente
  public valor: any = "" // para preencher com R$ no input


  // quando inicia o model view, é feito tudo que está nesse bloco
  //this.cliente = this.clientes[0]
  ngOnInit(): void {
    this.clienteServico = new ClienteServico(this.Http)
    let id: Number = this.routerParams.snapshot.params['id']
    if (id) {
      this.editaCliente(id)
      this.titulo = "Alterar Cliente"
      this.cliente = ClienteServico.buscaClientesPorId(id)
      this.valor = this.cliente.valor.toString()
    }
  } // esse método busca o cliente


  private async editaCliente(id: Number) {
    this.titulo = "Alterar Cliente"
    this.cliente = ClienteServico.buscaClientesPorId(id)
    this.valor = this.cliente?.valor.toString()
  } // esse método retorna para um objeto de um cliente


  // essa classe vai adicionar os dados 
  salvar() {
    if (this.valor && this.cliente && this.cliente.id > 0) {
      this.cliente.valor = this.convertNumber(this.valor)
      this.clienteServico.update(this.cliente)
    }
    else {
      this.clienteServico.criar({
        id: 0,
        nome: this.cliente.nome,
        telefone: this.cliente.telefone,
        endereco: this.cliente.endereco,
        data: new Date(),
        valor: this.convertNumber(!this.valor ? 0 : this.valor),
        cpf: "45678945612"
      });
    }

    this.clienteObserverServicoService.atualizaQuantidade();
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
