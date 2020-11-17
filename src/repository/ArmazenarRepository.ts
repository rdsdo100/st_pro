import {getConnection} from "typeorm";
import {EstoqueEnderecos} from "../entity/EstoqueEnderecos";
import {Lotes} from "../entity/Lotes";
interface IEnderecos{
    estoque?: number,
    zona?: number,
    rua?: number,
    coluna?: number,
    nivel?: number,
    message?: string
}

const arnazenarRepository = async (lote: string, enderecos: IEnderecos) => {

    let retornoEndereco , retornoLote ,retorno
    let enderecoUpdate = new EstoqueEnderecos()
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

       
        await queryRunner.commitTransaction();
    } catch (err) {

        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return retorno
}
export { arnazenarRepository }


