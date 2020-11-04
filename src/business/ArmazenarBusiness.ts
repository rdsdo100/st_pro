import {arnazenarRepository} from "../repository/ArmazenarRepository";
interface IEnderecos{
    estoque: string,
    zona: string,
    rua: string,
    coluna: string,
    nivel: string
}

export  default class ArmazenarBusiness {


    async addLoteEndereco(lote: string, enderecos: string) {


        let arma : IEnderecos = {
            estoque: "1",
            zona: '101',
            rua: '1',
            coluna: '1',
            nivel: "1"

        }

        lote = "10"
       const armazenar = await arnazenarRepository(lote , arma)
        return armazenar

    }

    async removeLoteEndereco(lote: string, enderecos: string) {

    }

    
}