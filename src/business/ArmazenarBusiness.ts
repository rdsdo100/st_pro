import {arnazenarRepository} from "../repository/ArmazenarRepository";
import {converterEndereco} from "../util/ConverterEndereco";
interface IEnderecos{
    estoque?: string,
    zona?: string,
    rua?: string,
    coluna?: string,
    nivel?: string
    message?: string
}

export  default class ArmazenarBusiness {

    async addLoteEndereco(lote: string, enderecos: string) {

        let enderco : IEnderecos = converterEndereco(enderecos)

      /* const armazenar = await arnazenarRepository('202120011' , enderco)
        return armazenar*/

    }

    async desarmazenarLoteEndereco(lote: string, enderecos: string) {

    }

    
}