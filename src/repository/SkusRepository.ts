import {getManager} from "typeorm";
import {Skus} from "../entity/Skus";

const cadastrarSkuRepository = async (sku : Skus)=>{
    const skuRepository = getManager()
    return await skuRepository.save(sku)
}

const buscarSkuRepository = async (codigoSku : number)=>{
    const skuRepository = getManager()
    return skuRepository.findOne(Skus , codigoSku )
}

const buscarSkuIdRepository = async (idSku : number)=>{
    const skuRepository = getManager()
    return skuRepository.findOne(Skus , idSku)
}

const listSkuRepository = async ()=>{
    const skuRepository = getManager()
    return skuRepository.find(Skus)

}

const updateSkuRepository = async (sku : Skus)=>{
    const skuRepository = getManager()
}

const deleteSkuIdRepository = async (idSku : number) => {
    const skuRepository = getManager()
    return skuRepository.delete(Skus , idSku)
}
export {cadastrarSkuRepository,
    buscarSkuRepository ,
    buscarSkuIdRepository,
    listSkuRepository,
    deleteSkuIdRepository }