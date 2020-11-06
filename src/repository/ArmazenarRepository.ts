import {getConnection} from "typeorm";
import {EstoqueEnderecos} from "../entity/EstoqueEnderecos";
import {Lotes} from "../entity/Lotes";
interface IEnderecos{
    estoque?: string,
    zona?: string,
    rua?: string,
    coluna?: string,
    nivel?: string,
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
        retornoEndereco = await queryRunner.manager.getRepository(EstoqueEnderecos).findOne(
            {
                where:{
                    estoqueIdfK : enderecos.estoque,
                    zona: enderecos.zona,
                    rua: enderecos.rua,
                    coluna: enderecos.coluna,
                    nivel: enderecos.nivel
                }
            })
        retornoLote = await queryRunner.manager.getRepository(Lotes).findOne(
            {

                where:{
                    codigoLote: lote
                }
            })

        if(!retornoEndereco?.enderecoAlocado){

            if(retornoLote?.codigoLote === lote){

                enderecoUpdate.lote.id = retornoLote.id
                enderecoUpdate.enderecoAlocado = true

                retorno = await  queryRunner.manager
                    .update(EstoqueEnderecos , {id : retornoEndereco?.id} , enderecoUpdate )
            }
        }

        await queryRunner.commitTransaction();
    } catch (err) {

        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return retorno
}
export { arnazenarRepository }


