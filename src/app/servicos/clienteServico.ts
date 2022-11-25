import { Cliente } from "../models/cliente";

export class ClienteServico {
    private static clientes: Cliente[] = []

    public static buscaClientes(): Cliente[] {
        return ClienteServico.clientes;
    }

    public static setCliente(cliente: Cliente): void {
        ClienteServico.clientes.push(cliente);

    }

    public static adicionarCliente(cliente: Cliente): void {
        cliente.id = ClienteServico.buscaClientes().length + 1
        ClienteServico.clientes.push(cliente)
    }

    public static alteraCliente(cliente: Cliente): void {
        for (let i = 0; i < ClienteServico.clientes.length; i++) {
            let clienteDb = ClienteServico.clientes[i];
            if (cliente.id == cliente.id) {
                clienteDb = { ...cliente }
            }
            break
        }

    }

    public static excluirCliente(cliente: Cliente): void {
        let listaNova = []
        for (let i = 0; i < ClienteServico.clientes.length; i++) {
            let clienteDb = ClienteServico.clientes[i];
            if (cliente.id != cliente.id) {
                listaNova.push(clienteDb)
            }
            break
        }

        ClienteServico.clientes = listaNova

    }
}