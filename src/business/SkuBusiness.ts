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

 private geradorVencidos (shelfLife: number) :number {
     let vencido: number
        if (shelfLife <= 90){
            vencido =  Math.round(shelfLife * 0.1)
        }else {
            vencido = Math.round(shelfLife * 0.05)
        }
if(vencido <= 1){
    return 1
}else {
    return vencido
}


    }
}