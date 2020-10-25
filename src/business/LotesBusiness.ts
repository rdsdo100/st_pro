import {getRepository} from "typeorm";
import {Lotes} from "../entity/Lotes";
import {Skus} from "../entity/Skus";
import SkuBusiness from "./SkuBusiness";

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
        lote.codigoLote = await this.criarNumeroLote(   cadastroLote.skuIdfK )


        lote.quantidade = cadastroLote.quantidade
        lote.dataFabricacao = Date.now()
        lote.skuIdfK = sku

        console.log(lote)

        return await lotesRepository.save(lote)

    }

    async bucaLotes(){
        const lotesRepository = getRepository(Lotes)
        const lote = new Lotes()
    }

    async listLotes(){
        const lotesRepository = getRepository(Lotes)
        const lote = new Lotes()
    }

    private async  criarNumeroLote(     idSku: number,   /* dataFabricacao: Date*/ ) : Promise<string>{
        const skuRepository = getRepository(Skus)
        const sku = new Skus()
        const skuBusiness = new SkuBusiness()
        if(!skuBusiness.isSku(Number(idSku))){

        }
        let numenroLote: string ;


        //Devo revisar esse código
        let numeroSku = await skuRepository.findOne(
            {
                where: {
                    id : idSku
                }

            }

        )

        sku.codigoProximoLote = Number(numeroSku?.codigoProximoLote ) + 1
        numenroLote = `${Date.now()}${numeroSku?.codigoProximoLote}`
        await skuRepository.update(Number(idSku) , sku )
        return numenroLote





    }
}