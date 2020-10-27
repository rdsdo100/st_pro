import SkuBusiness from "../business/SkuBusiness";
import {getConnection, getManager} from "typeorm";
import {Skus} from "../entity/Skus";
import {Lotes} from "../entity/Lotes";

const criarNumeroLoteRepository = async (idSku: number, dataFabricacao: Date) : Promise<object>=>{

    const skuBusiness = new SkuBusiness()

    let skuRetorno
    let sucesso: boolean

    if(!skuBusiness.isSku(Number(idSku))){

            sucesso : false

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

    return { ...skuRetorno, sucesso}
}

const cadastrarLoteRepository = async (lote : Lotes)=>{
    const lotesRepository = getManager()
    return await lotesRepository.save(lote)
}

const buscarLoteRepository = async (numeroLote : string)=>{
    const lotesRepository = getManager()
    return lotesRepository.findOne(Lotes , {codigoLote : numeroLote })
}

const buscarLoteIdRepository = async (idLote : number)=>{
    const lotesRepository = getManager()
    return lotesRepository.findOne(Lotes , idLote)


}


const listLotesRepository = async ()=>{
    const lotesRepository = getManager()
    return lotesRepository.find(Lotes)


}

const updateLoteRepository = async (lote : Lotes)=>{
    const lotesRepository = getManager()
}

const deleteSkuIDRepository = async (idLote : number) => {
    const lotesRepository = getManager()
    return lotesRepository.delete(Lotes , idLote)
}



export {criarNumeroLoteRepository ,
    cadastrarLoteRepository ,
    buscarLoteRepository ,
    buscarLoteIdRepository ,
    listLotesRepository ,
    updateLoteRepository,
    deleteSkuIDRepository
}