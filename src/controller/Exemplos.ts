import { Controller, Get } from "@overnightjs/core";
import {Request, Response} from "express";
import {Nivel} from '../util/Nivel'

@Controller('exemplos')
export default class Exemplos {

@Get('rotas')
exemploRotas (_: Request , response: Response){
response.json({

    usuarios: {
    usuarios: {
        rota: "/user",
        requisicao: {
            get: {
            heades: {},
            params: "",
            body:{}
        },
            post: {
                heades: {},
                params: "",
                body:{
                    "nome" : "string",
                    "email" : "string",
                    "senha" : "string",
                    "matricula" : "string",
                    "grupoUsuario" : "number" 
            }
        }
            ,
            delete: {
                heades: {},
                params: "/number",
                body:{}
},
update:{ heades: {},
params: "/number",
body:{}}
        }
        
    } ,
    gupoUsuario: {
        rota: "/gupo-usuario",
        requisicao: {
            get: {
            heades: {},
            params: "",
            body:{}
        },
            post: {
                heades: {},
                params: "",
                body:{}
        }
            ,
            delete: {
                heades: {},
                params: "/number",
                body:{}
},
update:{
    heades: {},
    params: "/number",
    body:{}
}
        }
        
    }


    }
  

})

}

@Get('login')
exemplologin (_: Request , response: Response){
response.json({})

}


}
