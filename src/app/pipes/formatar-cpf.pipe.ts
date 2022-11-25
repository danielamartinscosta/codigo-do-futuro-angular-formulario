import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarCpf'
})
export class FormatarCpfPipe implements PipeTransform {

  transform(cpf: String): String { // Função que recebe um numérico e tranforma em uma String (mudiu para string depois)
    let cpfFormatado = cpf.toString(); // 
    return cpfFormatado.replace (/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

}
