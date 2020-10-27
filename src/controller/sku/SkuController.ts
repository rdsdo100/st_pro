import {Request, Response} from "express";
import {Skus} from "../../entity/Skus";
import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {decodificar} from "../../config/Jwt";
import SkuBusiness from "../../business/SkuBusiness";
import {cadastrarSkuRepository} from "../../repository/SkusRepository";

@Controller('sku')
//@ClassMiddleware([decodificar])
export default class SkuController {

    @Get()
    async index(request: Request, response: Response) {

        const skuBusiness = new SkuBusiness()
        const retorno = skuBusiness.index()
        return response.json(retorno)
    }

    @Get(':id')
    async buscaId(request: Request, response: Response) {

        const skuBusiness = new SkuBusiness()
        const retorno = await skuBusiness.buscaSkuId(Number(request.params.id))
        return response.json(retorno)
    }

    @Post()
    async cadastroSku(request: Request, response: Response) {

        const skuBusiness = new SkuBusiness()
            const skus = new Skus()
            skus.nomesku = String(request.body.nomesku)
            skus.ativo = Boolean(request.body.ativo)
            skus.codigoEan = String(request.body.codigoEan)
            skus.codigoNCM = String(request.body.codigoNCM)
            skus.shelfLife = Number(request.body.shelfLife)
            skus.unidadeVenda = String(request.body.unidadeVenda)

            const retorno = await skuBusiness.cadastroSku(skus)
            return response.json({
                retorno,
               /* mesage: `Sku cadastrado ${retorno.id} - ${retorno.nomesku}.`*/ })

        }



}