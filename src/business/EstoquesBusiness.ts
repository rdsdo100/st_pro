import {Estoques} from "../entity/Estoques";
import {getRepository} from "typeorm";

export default class EstoquesBusiness{

    async buscarTodosEstoques (nomeEstoque: string){
        try {
            const estoques = new Estoques()
            estoques.nomeEstoque = nomeEstoque
            const getEstoques = getRepository(Estoques)
            const retorno = await getEstoques.find()
            return retorno
        }catch (err){
            return {
                err: err ,
                message: err.mesage
            }
        }
    }

    async cadastroEstoque(nomeEstoque: string){
        try {
            const estoques = new Estoques()

            estoques.nomeEstoque = nomeEstoque
            const getEstoques = getRepository(Estoques)
            const retorno = await getEstoques.save(estoques)
            return retorno
        }catch (err){
            return {
                err: err ,
                message: err.mesage
            }
        }
    }

    isEstoque(){

    }

}