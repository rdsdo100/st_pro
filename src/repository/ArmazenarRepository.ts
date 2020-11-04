import {getConnection} from "typeorm";
import {EstoqueEnderecos} from "../entity/EstoqueEnderecos";
interface IEnderecos{
    estoque: string,
    zona: string,
    rua: string,
    coluna: string,
    nivel: string
}

const arnazenarRepository = async (lote: string, enderecos: IEnderecos) => {

    let retorno

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        retorno = await queryRunner.manager.getRepository(EstoqueEnderecos).findOne(
            {
                where:{
                    estoqueIdfK : enderecos.estoque,
                    zona: enderecos.zona,
                    rua: enderecos.rua,
                    coluna: enderecos.coluna,
                    nivel: enderecos.nivel
                }
            })


        await queryRunner.commitTransaction();
    } catch (err) {

        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return retorno
}

export {
    arnazenarRepository
}


