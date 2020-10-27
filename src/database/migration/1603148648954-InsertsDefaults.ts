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
        insert into usuarios (id ,nome_usuario, email, senha, matricula, grupo_usuarios_id_fk) values
        (1 , 'root' , 'root@root.com' , '123456' , '123' , 1);
        
        `)

        await queryRunner.query(`
        insert into estoques (id, nome_estoque) values
                                        (1 , 'PADRÃO');
        
        `)
        await queryRunner.query(`
        
        INSERT INTO skus (id, nome_sku, shelf_life, codigo_ncm, codigo_ean, unidade_venda ,ativo) VALUES
                (1 , 'CARVEJA' , 180 , '12345678' , '1234567890123', 'UN' , true);
        
        
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}