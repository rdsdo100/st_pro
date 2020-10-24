import {Request, Response} from "express";
import {Estoques} from "../../entity/Estoques";
import {getRepository} from "typeorm";
import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {decodificar} from "../../config/Jwt";



@Controller('estoques')
@ClassMiddleware([decodificar])
export default class EstoqueController {


    @Get()
    async index(request: Request , response: Response){

        try {
            const estoques = new Estoques()

            estoques.nomeEstoque = String(request.body.nomeEstoque)

            const getEstoques = getRepository(Estoques)
            const retorno = await getEstoques.find()
            return response.json(retorno)
        }catch (err){
            return response.json({
                err: err ,
                message: err.mesage
            })
        }
    }

    @Post()
    async cadastroEstoque(request: Request , response: Response){

        try {
            const estoques = new Estoques()

            estoques.nomeEstoque = String(request.body.nomeEstoque)
            const getEstoques = getRepository(Estoques)
            const retorno = await getEstoques.save(estoques)
            return response.json(retorno)
        }catch (err){
            return response.json({
                err: err ,
                message: err.mesage
            })
        }

    }



}