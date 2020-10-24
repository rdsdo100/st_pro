import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {Request, Response} from "express";
import {Between,  getRepository} from "typeorm";
import { EstoqueEnderecos } from "../../entity/EstoqueEnderecos";
import { Estoques } from "../../entity/Estoques";
import {decodificar} from "../../config/Jwt";

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

@Controller('estoques-endereco')
@ClassMiddleware([decodificar])
export default class EnderecoEstoqueController {
    @Get()
    async index(request: Request , response: Response){
        const getEnderecoEstoqueRepository = getRepository(EstoqueEnderecos)
        const retorno = await getEnderecoEstoqueRepository.find()
        return response.json(retorno)
    }

@Post()
async cadastroEnderecos (request: Request , response: Response){

    const enderecoEstoqueRepository = getRepository(EstoqueEnderecos)
    const estoqueEnderecos = new EstoqueEnderecos()
    const gerador = {
        estoque : Number(request.body.estoque) ,
        zona: String(request.body.zona),
        ruaI : Number(request.body.ruaI) ,
        ruaF : Number(request.body.ruaF) ,
        colunaI : Number(request.body.colunaI) ,
        colunaF : Number(request.body.colunaF) ,
        nivelI :Number(request.body.nivelI) ,
        nivelF : Number(request.body.nivelF) ,
    }

    //verificar endereços
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
        return response.json(retorno)
    } else {
        return response.json({
                message: "existe endereçoa ja cadastrados nesta seleção!"
            }
        )
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