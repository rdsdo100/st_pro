import { Controller, Get, Post } from "@overnightjs/core";
import {Request , Response} from 'express'
import { getRepository } from "typeorm";
import {GrupoUsuarios} from "../entity/GrupoUsuarios";

@Controller('gupo-usuario')
export default class GurpoUsuarioController {

@Get()
async index(_: Request , response: Response){
try {
  const getGrupoUsuarios = getRepository(GrupoUsuarios)
const resposta = await getGrupoUsuarios.find()
return response.json(resposta)
  
} catch (err) {
    return response.json({
        err : err
    })
}
}
}