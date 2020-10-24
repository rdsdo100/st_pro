import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {Request, Response} from "express";
import {decodificar} from "../../config/Jwt";

@Controller('sku')
@ClassMiddleware([decodificar])
export default class Sku {


    @Get()
    async index(request: Request , response: Response){}
    @Post()
    async cadastrolote(request: Request , response: Response){}
    @Get(':id')
    async buscaId(request: Request , response: Response){}
}