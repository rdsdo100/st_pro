import {getConnection, getManager} from "typeorm";
import SkuBusiness from "../business/SkuBusiness";
import {EstoqueEnderecos} from "../entity/EstoqueEnderecos";
interface IEnderecos{
    estoque: string,
    zona: string,
    rua: string,
    coluna: string,
    nivel: string
}

const arnazenarRepository = async (lote: string, enderecos: IEnderecos) => {
    const skuBusiness = new SkuBusiness()
    let retorno

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        retorno = await queryRunner.manager.findOne(EstoqueEnderecos,  {estoqueIdfK: Number(enderecos.estoque) , zona: enderecos.zona} );


        await queryRunner.commitTransaction();
    } catch (err) {

        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }
}


