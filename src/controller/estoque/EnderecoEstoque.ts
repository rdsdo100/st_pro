import { Controller, Get, Post } from "@overnightjs/core";
import {Request, Response} from "express";
import { getConnection, getRepository, Transaction } from "typeorm";
import { EstoqueEnderecos } from "../../entity/EstoqueEnderecos";
import { Estoques } from "../../entity/Estoques";
import Estoque from "./Estoque";

interface IsCadastroEnderecos {
    estoque: string,
    zonaI: string ,
    zonaF: string ,
    ruaI: string ,
    ruaF: string ,
    colunaI: string ,
    colunaF: string ,
    nivelI: string ,
    nivelF: string ,


}

@Controller('estoques-endereco')
export default class EnderecoEstoque {
    @Get()
    async index(request: Request , response: Response){

        const getEnderecoEstoqueRepository = getRepository(EstoqueEnderecos)


        const retorno = await getEnderecoEstoqueRepository.find()

        return response.json(retorno)



    }

@Post()
    async cadastroEnderecos (request: Request , response: Response){

        const enderecoEstoqueRepository = getRepository(EstoqueEnderecos)
        const estoqueEnderecos = new EstoqueEnderecos
        const estoque = new Estoques()
    const ruaI = 1
    const ruaF = 1
    const colunaI = 1
        const  colunaF = 10

    const nivelI = 1
    const nivelF = 2
        const teste = []
 let cont = 0

    for (let i = ruaI ; i <= ruaF ; i++){
        for (let j = colunaI ; j <= colunaF ; j++) {
            for (let l = nivelI; l<= nivelF; l++) {

                teste.push(`101-${i}-${j}-${l} -> ${cont ++ } `)


            }
        }
    }





      /*  estoqueEnderecos.zona = '101'
        estoqueEnderecos.rua = '2'
        estoqueEnderecos.coluna = '2'
        estoqueEnderecos.nivel = '2'
        estoqueEnderecos.ativo = true
        estoque.id = 1
        estoqueEnderecos.estoqueIdfK = estoque


       const retorno = await enderecoEstoqueRepository.save(estoqueEnderecos)*/

    return response.json(teste)


    }

}