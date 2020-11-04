import {getConnection} from "typeorm";
import SkuBusiness from "../business/SkuBusiness";
import {Lotes} from "../entity/Lotes";
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
        retorno = await queryRunner.manager.find(Lotes)
   //     createQueryBuilder()
        /*    .select()
            .from(Lotes , 'l')
            // .where("l.id = :id", { id: 1 })
            .getMany();
*/

        console.log(retorno)


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


