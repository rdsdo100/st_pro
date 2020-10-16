import {getRepository} from "typeorm/index";
import {Request, Response} from "express";
import { Controller, Get } from '@overnightjs/core';
import {Usuarios} from "../entity/Usuarios";
import {GrupoUsuarios} from "../entity/GrupoUsuarios";


@Controller('login')
export default class LoginController{

    async index(request: Request , response: Response){

    }

    @Get()
    async login(request: Request , response: Response) {

        try {

            const usuariosRepository = getRepository(Usuarios)
            const usuario = new Usuarios()
            const tipoUsuarios = new GrupoUsuarios()

            usuario.nome = String(request.headers.user)
            usuario.senha = String(request.headers.password)

            const getUsuario = await usuariosRepository.findOne(

                {

                    where: [
                        {nomeUsuario: usuario.nome}
                    ]
                }
            )




        } catch (error) {

            response.json(error)

        }
    }
}