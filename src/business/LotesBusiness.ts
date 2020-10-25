import {getRepository} from "typeorm";
import {Lotes} from "../entity/Lotes";
import {Skus} from "../entity/Skus";


interface ICricarNumeroLote {
    sku: string ,
    dataFabricacao: Date ,
    codigoProximoLote: number
}

export default class LotesBusiness{



    cadastroLotes(){
        const lotesRepository = getRepository(Lotes)
        const lote = new Lotes()
        const sku = new Skus()
        
        lote.codigoLote
        lote.dataFabricacao
        lote.quantidade
        lote.skuIdfK

    }
    bucaLotes(){}
    listLotes(){}
    criarNumeroLote( ){

    }
}