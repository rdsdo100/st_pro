import {getRepository} from "typeorm";
import {Skus} from "../entity/Skus";

interface ISkus {
    nomesku :  string
    ativo : boolean
    codigoEan :  string
    codigoNCM :  string
    shelfLife :  number
    unidadeVenda :  string
}

export default class SkuBusiness{


    async index(){

        try{
            const gitSkus = getRepository(Skus)

            const retorno = await gitSkus.find()
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
            const gitSkus = getRepository(Skus)

            const retorno = await gitSkus.findOne(
                {
                    where: {
                        id: id
                    }
                }
            )
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
            const gitSkus = getRepository(Skus)
         const skus = new Skus()


            const retorno = await gitSkus.save(skus)

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
            const gitSkus = getRepository(Skus)

            const retorno = await gitSkus.findOne(
                {

                    where: [
                        {id : idSku}
                    ]
                }
            )

            if(retorno?.id === idSku){
                return true
            }

            return false

        }catch (err){
            return false
        }
    }




}