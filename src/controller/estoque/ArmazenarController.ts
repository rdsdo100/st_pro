import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {Request, Response} from "express";
import {decodificar} from "../../config/Jwt";
import ArmazenarBusiness from "../../business/ArmazenarBusiness";


@Controller('armazenar')
//@ClassMiddleware([decodificar])
export default class EnderecoEstoqueController {
    @Get()
    async index(request: Request, response: Response) {

    }

    @Post()
    async Armazenar (request: Request, response: Response) {

        const armazenarBusiness = new ArmazenarBusiness()

       const retorno = await armazenarBusiness.addLoteEndereco("10" , '20')
       response.json(retorno)

    }

}