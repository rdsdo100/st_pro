import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertsDefaults1603148648954 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        insert into grupo_usuarios (id, nome ) VALUES
(1 , 'root'),
(2 , 'administrador'),
(3 , 'adm. Estoque');


        
        `)
        await queryRunner.query(`
        insert into usuarios (id ,nome, email, senha, matricula, grupo_usuarios_id_fk) values
        (1 , 'root' , 'root@root.com' , '123456' , '1' , 1);
        
        `)

        await queryRunner.query(`
        insert into estoques (id, nome_estoque) values
                                        (1 , 'PADRÃO');
        
        `)




    }


    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
