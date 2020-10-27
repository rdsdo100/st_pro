import {getConnection,  getRepository} from "typeorm";
import {Lotes} from "../entity/Lotes";
import {Skus} from "../entity/Skus";
import SkuBusiness from "./SkuBusiness";
import {formatDateMesAno} from "../util/formatDate";
import {formatSku} from "../util/FormatSku";
import {formatNumeroLote} from "../util/FomatNumeroLote";
import {
    buscarLoteRepository,
    cadastrarLoteRepository,
    listLotesRepository
} from "../repository/LotesRepository";

interface ICadastroLote {
    dataFabricacao?: Date,
    quantidade : number,
    skuIdfK : number,
}
interface INumeroLote{

    sucesso: boolean,
    numenroLote: string
}

export default class LotesBusiness{

    async cadastroLotes(cadastroLote: ICadastroLote){
        const lote = new Lotes()
        const sku = new Skus()
        const testeLote = await this.criarNumeroLote( cadastroLote.skuIdfK , new Date() )
        sku.id = cadastroLote.skuIdfK
        lote.codigoLote = testeLote.numenroLote
        lote.quantidade = cadastroLote.quantidade
        lote.dataFabricacao = cadastroLote.dataFabricacao || new Date
        lote.skuIdfK = sku

        if(testeLote.sucesso) {
            const retorno = await cadastrarLoteRepository(lote)
            return retorno
        }else{
            return {...lote , mesage: "Lote não cadastrado"}
        }

    }

    private async  criarNumeroLote(idSku: number, dataFabricacao: Date) : Promise<INumeroLote>{

        const skuBusiness = new SkuBusiness()
        let skuRetorno
        let numenroLoteRetorno
        let sucesso: boolean

        if(!skuBusiness.isSku(Number(idSku))){
            return {
                sucesso : false ,
                numenroLote : "Erro"
            }
        }

        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {

            skuRetorno =  await queryRunner.manager.findOne(Skus , idSku);
            await queryRunner.manager.update(Skus, idSku, {codigoProximoLote : Number(skuRetorno?.codigoProximoLote) + 1} )
            sucesso = true

            await queryRunner.commitTransaction();

        } catch (err) {
            sucesso = false
            await queryRunner.rollbackTransaction();

        } finally {
            await queryRunner.release();

        }


        if (skuRetorno?.id) {
            numenroLoteRetorno = `L${formatSku(String(skuRetorno?.id))}${formatDateMesAno(dataFabricacao)}${formatNumeroLote(String(skuRetorno?.codigoProximoLote))}`
        }else {
            sucesso = false
            numenroLoteRetorno = 'Erro'
        }

        return {
            sucesso ,
            numenroLote : numenroLoteRetorno
        }
    }

    async bucaLotes(numeroLote : string){
        const lotesRepository = getRepository(Lotes)
        return await buscarLoteRepository(numeroLote)
    }

    async listLotes(){
        const lotesRepository = getRepository(Lotes)
        return await listLotesRepository()
    }
}