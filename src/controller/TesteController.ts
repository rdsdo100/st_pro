import {json, Request, Response} from "express";
import { Controller, Get } from '@overnightjs/core';
import {formatEndereco} from "../util/FormatarEndereco";
import {converterEndereco} from "../util/ConverterEndereco";
import EstoquesBusiness from "../business/EstoquesBusiness";
import {EstoqueEnderecos} from "../entity/EstoqueEnderecos";
import {getManager} from "typeorm";

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
    async Test(request: Request , response: Response) {

        const user = await getManager()
            .createQueryBuilder(EstoqueEnderecos, "user")
            .where("user.id = :id and user.zona = :zona", { id: 100 , zona: 200 })

            .getOne();
        console.log(user)


        return response.json(user)


    }
}