import {json, Request, Response} from "express";
import { Controller, Get } from '@overnightjs/core';
import {formatEndereco} from "../util/FormatarEndereco";

interface IEnderecos{
    estoque?: string,
    zona: string,
    rua: string,
    coluna: string,
    nivel: string
}


@Controller('test')
export default class TestController{

    @Get()
    async login(request: Request , response: Response) {
        let con : IEnderecos = {
            estoque: "1",
            zona: "202",
            rua: "12",
            coluna: "1",
            nivel: "1"
        }


        const retorno = formatEndereco(con)
        return response.json(retorno)
    }
}