import {Between, getRepository} from "typeorm";
import {EstoqueEnderecos} from "../entity/EstoqueEnderecos";
import {Estoques} from "../entity/Estoques";
import {listEstoqueEnderecosRepository} from "../repository/EnderecoRepository";

interface IsCadastroEnderecos {
    estoque: number,
    zona: string ,
    ruaI: number ,
    ruaF: number ,
    colunaI: number ,
    colunaF: number ,
    nivelI: number,
    nivelF: number ,

}

interface IsBuscaEnderecos {
    estoque: number,
    zona: number ,
    rua: number ,
    coluna: number ,
    nivelI: number

}

export default  class EnderecosBusiness{

    async buscarTodosEnderecos() {


    }

    async cadastroEnderecos (gerador: IsCadastroEnderecos){
        const enderecoEstoqueRepository = getRepository(EstoqueEnderecos)

        this.isVerificarEndereco(gerador)

        if(await this.isVerificarEndereco(gerador) === true ){
            const endercos = this.geradorEnderecos(gerador)
            const retorno = await enderecoEstoqueRepository.save(endercos)
            return retorno
        } else {

        }

    }

    async isVerificarEndereco(gerador: IsCadastroEnderecos) : Promise<boolean> {
        const enderecoEstoqueRepository = getRepository(EstoqueEnderecos)
        const verificarEnderecos = await enderecoEstoqueRepository.find(
            {
                where:{
                    zona : gerador.zona,
                    rua: Between(gerador.ruaI , gerador.ruaF),
                    coluna: Between(gerador.colunaI , gerador.colunaF),
                    nivel: Between(gerador.nivelI , gerador.nivelF),
                }
            }
        )

        if(verificarEnderecos.length ===  0 ){
            return true

        } else {
            return false

        }

        return false
    }

    geradorEnderecos (gerador: IsCadastroEnderecos) : Array<object>{

        const estoques = new Estoques()
        estoques.id = Number(gerador.estoque)
        const enderecos: Array<EstoqueEnderecos> = []

        for (let i = gerador.ruaI ; i <= gerador.ruaF ; i++){
            for (let j = gerador.colunaI ; j <= gerador.colunaF ; j++) {
                for (let l = gerador.nivelI; l<= gerador.nivelF; l++) {
                    const estoqueEnderecos = new EstoqueEnderecos()
                    estoqueEnderecos.zona = Number(gerador.zona)
                    estoqueEnderecos.rua = Number(i)
                    estoqueEnderecos.coluna = Number(j)
                    estoqueEnderecos.nivel = Number(l)
                    estoqueEnderecos.ativo = true
                    estoqueEnderecos.estoqueIdfK = estoques
                    enderecos.push(estoqueEnderecos)
                }
            }
        }

        return enderecos

    }

    async bloquearEnderecos(encereco: string){}

}