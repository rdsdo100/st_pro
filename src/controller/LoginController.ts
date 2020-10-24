import {getRepository} from "typeorm/index";
import {Request, Response} from "express";
import { Controller, Get } from '@overnightjs/core';
import {Usuarios} from "../entity/Usuarios";
import {GrupoUsuarios} from "../entity/GrupoUsuarios";
import {assinar} from "../config/Jwt";


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

            usuario.nomeUsuario = String(request.headers.user)
            usuario.senha = String(request.headers.password)

            const getUsuario = await usuariosRepository.findOne(

                {

                    where: [
                        {nomeUsuario: usuario.nomeUsuario}
                    ]
                }
            )


          const authorization =   assinar(
                Number(getUsuario?.id)
                , String(getUsuario?.nomeUsuario)
                , Number(getUsuario?.grupoUsuariosIdFk.id)

            )

            return response.json({
                authorization : authorization})


        } catch (error) {

            response.json(error)

        }
    }
}