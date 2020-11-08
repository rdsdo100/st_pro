import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {Request, Response} from "express";
import {decodificar} from "../../config/Jwt";
import EnderecosBusiness from "../../business/EnderecosBusiness";

@Controller('estoques-endereco')
@ClassMiddleware([decodificar])
export default class EnderecoEstoqueController {
    @Get()
    async index(request: Request, response: Response) {

        const  enderecosBusiness = new EnderecosBusiness()
        const retorno = await enderecosBusiness.buscarTodosEnderecos()
        return response.json( {
            //qtdEnderecos: retorno.length,
            retorno
        })
    }

    @Post()
    async cadastroEnderecos(request: Request, response: Response) {

        const gerador = {
            estoque: Number(request.body.estoque),
            zona: String(request.body.zona),
            ruaI: Number(request.body.ruaI),
            ruaF: Number(request.body.ruaF),
            colunaI: Number(request.body.colunaI),
            colunaF: Number(request.body.colunaF),
            nivelI: Number(request.body.nivelI),
            nivelF: Number(request.body.nivelF),
        }
        const enderecosBusiness = new EnderecosBusiness()
        const  retorno = await enderecosBusiness.cadastroEnderecos(gerador)
        return response.json(retorno)

    }

}