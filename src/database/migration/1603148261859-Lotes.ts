import {MigrationInterface, QueryRunner} from "typeorm";

export class Lotes1603148261859 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table if not exists lotes (
                                     id serial not null primary key,
                                     codigo_lote varchar not null,
                                     quantidade integer not null,
                                     data_fabricacao date not null,
                                     sku_id_fk integer ,
                                     constraint lotes_skus foreign key (sku_id_fk) references skus (id),
                                     created_at timestamp default now() not null,
                                     updated_at timestamp default now() not null                                                          
);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}