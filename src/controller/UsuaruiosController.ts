import {Controller, Delete, Get, Post} from "@overnightjs/core";
import { getRepository } from "typeorm";
import { Usuarios } from "../entity/Usuarios";
import {Request , Response} from 'express'
import {GrupoUsuarios} from "../entity/GrupoUsuarios";


@Controller('user')
export default class UsuaruiosController {

  

    @Post()
    async cadastroUsuarios(request: Request , response: Response){

        const usuarios = new Usuarios()
        const grupoUsuaruios = new  GrupoUsuarios()
        const setUsuarios = getRepository(Usuarios)

        try {

            usuarios.nome = String(request.body.nome)
            usuarios.email = String(request.body.email)
            usuarios.senha = String(request.body.senha)
            usuarios.matricula = String(request.body.matricula)
           grupoUsuaruios.id = Number(request.body.grupoUsuario)
            usuarios.usuariosIdfK = grupoUsuaruios

            console.log(usuarios)


            const resposta = await setUsuarios.save(usuarios)
            return   response.json( resposta )
        } catch (err) {
            return  response.json( {
                mesage : err.mesage ,
                err} )
        }

    }

    @Delete(':id')
    async deletarUsuario(request: Request , response: Response){
        const deletar = Number(request.params.id)



        const setUsuarios = getRepository(Usuarios)

        const resposta = await setUsuarios.findOne({
            where: {
                id : deletar
            }
        })
        response.json( resposta )


    }



}