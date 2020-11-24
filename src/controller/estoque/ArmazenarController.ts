import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {Request, Response} from "express";
import {decodificar} from "../../config/Jwt";
import ArmazenarBusiness from "../../business/ArmazenarBusiness";

@Controller('armazenar')
@ClassMiddleware([decodificar])
export default class EnderecoEstoqueController {
    @Get()
    async index(request: Request, response: Response) {

    }

    @Get('alocar')
    async Armazenar (request: Request, response: Response) {

        const armazenarBusiness = new ArmazenarBusiness()
        const lote:string = String(request.query.lote)
        const endereco:string = String(request.query.endereco)

      const retorno = await armazenarBusiness.addLoteEndereco(lote , endereco)
       response.json(retorno)

    }

}