import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {Request, Response} from "express";
import {decodificar} from "../../config/Jwt";
import LotesBusiness from "../../business/LotesBusiness";
import {formatSku} from "../../util/FormatSku";

interface ICadastroLote {
    codigoLote: number,
    dataFabricacao : Date,
    quantidade : number,
    skuIdfK : number,
}


@Controller('lote')
//@ClassMiddleware([decodificar])
export default class Sku {


    @Get()
    async index(request: Request , response: Response){

    }
    @Post()
    async cadastrolote(request: Request , response: Response){

const lotes = new LotesBusiness()

            const quantidade = Number(request.body.quantidade)
            const skuIdfK = Number(request.body.sku)




const retorno = await lotes.cadastroLotes({quantidade , skuIdfK})
return response.json(retorno)



    }
    @Get(':id')
    async buscaId(request: Request , response: Response){}
}