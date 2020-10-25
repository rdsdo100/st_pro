import {MigrationInterface, QueryRunner} from "typeorm";

export class Skus1603148254726 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        
        create table if not exists skus (
                                    id serial not null primary key,
                                    nome_sku varchar not null,
                                    shelf_life integer not null,
                                    codigo_ncm varchar not null,
                                    codigo_ean varchar not null,
                                    unidade_venda varchar not null,
                                    codigo_proximo_lote number default 1 ,
                                    ativo boolean not null,
                                    "createdAt" timestamp default now() not null,
                                    "updatedAt" timestamp default now() not null
);
        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
