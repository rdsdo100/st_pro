import {getConnection, getManager, getRepository} from "typeorm";
import {Lotes} from "../entity/Lotes";
import {Skus} from "../entity/Skus";
import SkuBusiness from "./SkuBusiness";
import Sku from "../controller/sku/LoteController";

interface ICadastroLote {
    quantidade : number,
    skuIdfK : number,
}

export default class LotesBusiness{

    async cadastroLotes(cadastroLote: ICadastroLote){
       const lotesRepository = getRepository(Lotes)
        const lote = new Lotes()
        const sku = new Skus()

        sku.id = cadastroLote.skuIdfK
        lote.codigoLote =   await this.criarNumeroLote( cadastroLote.skuIdfK , new Date() )

        lote.quantidade = cadastroLote.quantidade
        lote.dataFabricacao = new Date
        lote.skuIdfK = sku

        const retorno =  await lotesRepository.save(lote)
        return retorno

    }

    private async  criarNumeroLote(idSku: number, dataFabricacao: Date) : Promise<string>{

        const skuBusiness = new SkuBusiness()
        let numenroLote: string = '' ;
        if(!skuBusiness.isSku(Number(idSku))){ }

        //Devo revisar esse código

        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();

        //await queryRunner.query("SELECT * FROM users");
        //const users = await queryRunner.manager.find(Skus);
// lets now open a new transaction:
        await queryRunner.startTransaction();
        try {
            // execute some operations on this transaction:
         const skuRetorno =  await queryRunner.manager.findOne(Skus , idSku);
            await queryRunner.manager.update(Skus, idSku, {codigoProximoLote : Number(skuRetorno?.codigoProximoLote) + 1} )
            numenroLote = String(skuRetorno?.codigoProximoLote)
          /*  await queryRunner.manager.save(user2);
            await queryRunner.manager.save(photos);*/

            // commit transaction now:
            await queryRunner.commitTransaction();

        } catch (err) {

            // since we have errors let's rollback changes we made
            await queryRunner.rollbackTransaction();


        } finally {

            // you need to release query runner which is manually created:
            await queryRunner.release();
        }
        return numenroLote
    }

















    async bucaLotes(){
        const lotesRepository = getRepository(Lotes)
        const lote = new Lotes()
    }

    async listLotes(){
        const lotesRepository = getRepository(Lotes)
        const lote = new Lotes()
    }
}