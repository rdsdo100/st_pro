import {MigrationInterface, QueryRunner} from "typeorm";

export class Lotes1603148261859 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table if not exists lotes (
                                     id serial not null primary key,
                                     codigo_lote varchar not null,
                                     quantidade integer not null,
                                     createdAt timestamp default now() not null,
                                     updatedAt timestamp default now() not null,
                                     sku_id_fk integer ,
                                     constraint lotes_skus foreign key (sku_id_fk) references skus (id)
                                                            
);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
