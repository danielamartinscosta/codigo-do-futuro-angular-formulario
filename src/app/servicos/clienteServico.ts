import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Cliente } from "../models/cliente";

import { firstValueFrom } from 'rxjs';

export class ClienteServico {
    static adicionarCliente(arg0: { id: number; nome: String; telefone: Number; endereco: String; data: Date; valor: Number; cpf: string; }) {
      throw new Error('Method not implemented.');
    }
    static alteraCliente(cliente: Cliente) {
      throw new Error('Method not implemented.');
    }
    static buscaClientesPorId(id: Number): Cliente {
      throw new Error('Method not implemented.');
    }
    //static buscaClientes: any;

    constructor(private http: HttpClient) { }

    public async lista(): Promise<Cliente[] | undefined> {
        let clientes: Cliente[] | undefined = await firstValueFrom(this.http.get<Cliente[]>(`${environment.api}/clientes`)) //firstValueFrom substitui o toPromise que está depricated

        return clientes;
    }

    public async buscaPorId(id: Number): Promise<Cliente | undefined> {
       return await  firstValueFrom(this.http.get<Cliente | undefined>(`${environment.api}/clientes/${id}`)) //firstValueFrom substitui o toPromise que está depricated

    }

    public excluirPorId(id: Number): void {
        firstValueFrom(this.http.delete(`${environment.api}/clientes/${id}`)) //firstValueFrom substitui o toPromise que está depricated

    }

    public async criar(cliente:Cliente): Promise<Cliente | undefined> {
        let clienteRest: Cliente | undefined = await firstValueFrom(this.http.post<Cliente>(`${environment.api}/clientes/`, cliente)) //firstValueFrom substitui o toPromise que está depricated

        return clienteRest;
    }


    public async update(cliente:Cliente): Promise<Cliente | undefined> {
        let clienteRest: Cliente | undefined = await firstValueFrom(this.http.put<Cliente>(`${environment.api}/clientes/${cliente.id}`, cliente)) //firstValueFrom substitui o toPromise que está depricated

        return clienteRest;
    }

}