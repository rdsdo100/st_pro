import {getRepository} from "typeorm";
import {Lotes} from "../entity/Lotes";

export default class LotesBusiness{



    cadastroLotes(){
        const lotesRepository = getRepository(Lotes)
        const lote = new Lotes()
        lote.codigoLote
        lote.dataFabricacao
        lote.quantidade
        lote.skuIdfK
    }
    bucaLotes(){}
    listLotes(){}
    criarNumeroLote(){

    }
}