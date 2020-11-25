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
    enderecos.estoque = 1
    let enderecoUpdate = new EstoqueEnderecos()
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

retornoEndereco = await queryRunner.manager.getRepository(EstoqueEnderecos).findOne({
        where: {
            zona : enderecos.zona,
            rua: enderecos.rua,
            coluna: enderecos.coluna,
            nivel: enderecos.nivel,
            estoqueIdfK:  enderecos.estoque
        }
    })
        retornoLote = await  queryRunner.manager.getRepository(Lotes).findOne({
            where:{
                codigoLote : lote
            }
        })
        

        if(retornoLote && retornoEndereco ){
            console.log({retornoLote ,retornoEndereco})

            const ret = await queryRunner.manager.getRepository(EstoqueEnderecos)
                .update(retornoEndereco.id , {
                    loteIdfK : retornoLote , enderecoAlocado: true
                })
            console.log({ret})

        }else {

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


