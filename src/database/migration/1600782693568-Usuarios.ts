import {MigrationInterface, QueryRunner} from "typeorm";

export class Usuarios1600782693568 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.query(`
        
create table if not exists usuarios (
                          id  serial not null primary key,
                          nome varchar not null,
                          email varchar not null unique,
                          senha varchar not null,
                          matricula varchar not null,
                          "createdAt" timestamp default now() not null,
                          "updatedAt" timestamp default now() not null,
                          grupo_usuarios_id_fk integer,
                          constraint usuarios_grupo_usuarios_id_fk foreign key (grupo_usuarios_id_fk) references grupo_usuarios (id)
);

        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
        alter table usuarios
    drop constraint if exists usuarios_grupo_usuarios_id_fk cascade;

        `)


        await  queryRunner.query(`
        drop table usuarios
        `)

    }

}
