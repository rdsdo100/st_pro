import {MigrationInterface, QueryRunner} from "typeorm";

export class GrupoUsuarios1600782688818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
create table if not exists grupo_usuarios (
                                id serial not null primary key,
                                nome varchar not null,
                                "createdAt" timestamp default now() not null,
                                "updatedAt" timestamp default now() not null
);     
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        drop table grupo_usuarios
        `)

    }

}
