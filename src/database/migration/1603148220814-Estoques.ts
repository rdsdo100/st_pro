import {MigrationInterface, QueryRunner} from "typeorm";

export class Estoques1603148220814 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        create table if not exists estoques (
                                        id serial not null primary key,
                                        nome_estoque varchar not null,
                                        created_at timestamp default now() not null,
                                        updated_at timestamp default now() not null
);
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
