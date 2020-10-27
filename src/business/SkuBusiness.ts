import {getManager} from "typeorm";
import {Skus} from "../entity/Skus";
import {buscarSkuIdRepository, cadastrarSkuRepository, listSkuRepository} from "../repository/SkusRepository";

export default class SkuBusiness{


    async index(){

        try{
            const retorno = await listSkuRepository()
            return retorno

        }catch (err){
            return {
                err ,
                mesage: err.mesage
            }
        }

    }

    async buscaSkuId(id:number) : Promise<Object>{

        try{
            const retorno = await await buscarSkuIdRepository(id)
            return {...retorno}

        }catch (err){
            return {
                err ,
                mesage: err.mesage
            }
        }
    }

    async cadastroSku(sku: Skus){

        try{
            const retorno = await cadastrarSkuRepository(sku)
            return {
                retorno ,
                mesage: `Sku cadastrado ${retorno.id} - ${retorno.nomesku}.`
            }
        }catch (err){
            return  {
                err ,
                mesage: err.mesage
            }
        }
    }

    // retorna boolean true para a existencia do sku
    async isSku(idSku:number) : Promise<boolean>{


        try{
            const gitSkus = getManager()

            const retorno = await buscarSkuIdRepository(idSku)


            if(retorno?.id === idSku){
                return true
            }

            return false

        }catch (err){
            return false
        }
    }


}