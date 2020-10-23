import {Request, Response} from "express";
import {Between, getRepository} from "typeorm";
import {EstoqueEnderecos} from "../entity/EstoqueEnderecos";
import {Estoques} from "../entity/Estoques";

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
    zona: string ,
    rua: number ,
    coluna: number ,
    nivelI: number

}

export default  class Enderecos{


    async cadastroEnderecos (gerador: IsCadastroEnderecos){






        //verificar endereços

    }

    async verificarEndereco(gerador: IsCadastroEnderecos){
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
            const endercos = this.geradorEnderecos(gerador)
            const retorno = await enderecoEstoqueRepository.save(endercos)

        } else {


        }
    }

    geradorEnderecos (gerador: IsCadastroEnderecos) {

        const estoques = new Estoques()
        estoques.id = Number(gerador.estoque)
        const enderecos: Array<EstoqueEnderecos> = []

        for (let i = gerador.ruaI ; i <= gerador.ruaF ; i++){
            for (let j = gerador.colunaI ; j <= gerador.colunaF ; j++) {
                for (let l = gerador.nivelI; l<= gerador.nivelF; l++) {
                    const estoqueEnderecos = new EstoqueEnderecos()
                    estoqueEnderecos.zona = String(gerador.zona)
                    estoqueEnderecos.rua = String(i)
                    estoqueEnderecos.coluna = String(j)
                    estoqueEnderecos.nivel = String(l)
                    estoqueEnderecos.ativo = true
                    estoqueEnderecos.estoqueIdfK = estoques
                    enderecos.push(estoqueEnderecos)
                }
            }
        }

        return enderecos

    }

}