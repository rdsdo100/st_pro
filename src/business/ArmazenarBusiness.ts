import {arnazenarRepository} from "../repository/ArmazenarRepository";
import {converterEndereco} from "../util/ConverterEndereco";
interface IEnderecos{
    estoque?: number,
    zona?: number,
    rua?: number,
    coluna?: number,
    nivel?: number
    message?: string
}


export  default class ArmazenarBusiness {

    async addLoteEndereco(lote: string, enderecos: string) {

        let endereco : IEnderecos = converterEndereco(enderecos)
         endereco.estoque = 1


       const armazenar = await arnazenarRepository(lote , endereco)
        return armazenar



    }

    async desarmazenarLoteEndereco(lote: string, enderecos: string) {

    }

    
}