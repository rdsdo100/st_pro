import {getConnection} from "typeorm";
import {EstoqueEnderecos} from "../entity/EstoqueEnderecos";
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
    enderecos.estoque = 1
    let enderecoUpdate = new EstoqueEnderecos()
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

retornoEndereco = await queryRunner.manager.getRepository(EstoqueEnderecos).findOne(
    {
        where: {
            zona : enderecos.zona,
            rua: enderecos.rua,
            coluna: enderecos.coluna,
            nivel: enderecos.nivel,
            estoqueIdfK:  enderecos.estoque
        }
    }
)
        

        console.log({enderecos ,lote ,retornoEndereco})



        await queryRunner.commitTransaction();
    } catch (err) {

        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return retorno
}
export { arnazenarRepository }


