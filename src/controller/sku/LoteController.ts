import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {Request, Response} from "express";
import {decodificar} from "../../config/Jwt";
import LotesBusiness from "../../business/LotesBusiness";

interface ICadastroLote {
    codigoLote: number,
    dataFabricacao : Date,
    quantidade : number,
    skuIdfK : number,
}
@Controller('lote')
@ClassMiddleware([decodificar])
export default class LoteController {

    @Post()
    async cadastrolote(request: Request , response: Response){

        const lotes = new LotesBusiness()
        const quantidade = Number(request.body.quantidade)
        const skuIdfK = Number(request.body.sku)
        const dataFabricacao = request.body.dataFabricacao

        const retorno = await lotes.cadastroLotes({quantidade , skuIdfK , dataFabricacao})
        return response.json(retorno)

    }
    @Get(':id')
    async buscaId(request: Request , response: Response){

    }

    @Get()
    async  buscarLote(request: Request , response: Response){

        const numeroLote = String(request.query.numeroLote)

        console.log(numeroLote)

        const lotesBusiness = new LotesBusiness()

        const retorno = await lotesBusiness.bucaLotes(numeroLote)

        return response.json(retorno)



    }
}