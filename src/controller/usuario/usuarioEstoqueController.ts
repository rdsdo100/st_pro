import {Controller, Get} from "@overnightjs/core";
import {Request, Response} from "express";

@Controller('usuario-estoque')

export default class UsuarioEstoqueController {


    @Get()
    async login(request: Request , response: Response) {

        const user = String(request.headers.user)



        return response.json({})
    }
}



