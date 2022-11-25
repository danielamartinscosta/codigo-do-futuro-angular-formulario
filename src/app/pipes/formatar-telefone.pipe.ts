import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarTelefone'
})
export class FormatarTelefonePipe implements PipeTransform {

  transform(telefone: String): String { // função que recebe um numerico e retorna uma string
    let telefoneFormatado = telefone.toString(); //transforma o número em uma string
    return telefoneFormatado.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");// a função do replace é de substituir os dados    
  }   

}
