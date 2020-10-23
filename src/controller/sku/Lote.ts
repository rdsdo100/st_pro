import {Controller, Get, Post} from "@overnightjs/core";
import {Request, Response} from "express";

@Controller('sku')
export default class Sku {


    @Get()
    async index(request: Request , response: Response){}
    @Post()
    async cadastrolote(request: Request , response: Response){}
    @Get(':id')
    async buscaId(request: Request , response: Response){}
}