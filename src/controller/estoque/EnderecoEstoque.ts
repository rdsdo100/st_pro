import {Request, Response} from "express";
interface cadastroEnderecos {
    estoque?: string,
    zonaI: string ,
    zonaF: string ,
    ruaI: string ,
    ruaF: string ,
    colunaI: string ,
    colunaF: string ,
    nivelI: string ,
    nivelF: string ,


}


export default class EnderecoEstoque {
    async index(request: Request , response: Response){

    }
}