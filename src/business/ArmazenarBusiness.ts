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

        let endereco : IEnderecos = converterEndereco(enderecos)
         endereco.estoque = String(1)


       const armazenar = await arnazenarRepository(lote , endereco)
        return armazenar



    }

    async desarmazenarLoteEndereco(lote: string, enderecos: string) {

    }

    
}