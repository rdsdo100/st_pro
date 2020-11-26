import {MigrationInterface, QueryRunner} from "typeorm";

export class UsuarioEstoque1606404590094 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
   create table usuario_estoque (
                                 id serial primary key ,
                                 usuario_id_fk int not null,
                                 estoque_id_fk int not null,
                                 constraint usuario_estoque_usuarios foreign key (usuario_id_fk) references usuarios,
                                 constraint usuario_estoque_estoques foreign key (estoque_id_fk) references estoques
);
    `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
