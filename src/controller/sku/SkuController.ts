import {Request, Response} from "express";
import {Skus} from "../../entity/Skus";
import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {getRepository} from "typeorm";
import {decodificar} from "../../config/Jwt";
import SkuBusiness from "../../business/SkuBusiness";

@Controller('sku')
@ClassMiddleware([decodificar])
export default class SkuController {

    @Get()
    async index(request: Request , response: Response){

        try{
            const gitSkus = getRepository(Skus)

            const retorno = await gitSkus.find()
            return response.json(retorno)

        }catch (err){
            return response.json({
                err ,
                mesage: err.mesage
            })
        }

    }

    @Get(':id')
    async buscaId(request: Request , response: Response){

       const skuBusiness = new SkuBusiness()
        const retorno = await skuBusiness.buscaSkuId(Number(request.params.id))
        return response.json(retorno)
    }

    @Post()
    async cadastroSku(request: Request , response: Response){

        try{
            const gitSkus = getRepository(Skus)
            const skus = new Skus()
            skus.nomesku =  String(request.body.nomesku)
            skus.ativo = Boolean(request.body.ativo)
            skus.codigoEan =  String(request.body.codigoEan)
            skus.codigoNCM =  String(request.body.codigoNCM)
            skus.shelfLife =  Number(request.body.shelfLife)
            skus.unidadeVenda =  String(request.body.unidadeVenda)

            const retorno = await gitSkus.save(skus)
            return response.json({
                retorno ,
                mesage: `Sku cadastrado ${retorno.id} - ${retorno.nomesku}.`
            })

        }catch (err){
            return response.json({
                err ,
                mesage: err.mesage
            })
        }

    }

}



