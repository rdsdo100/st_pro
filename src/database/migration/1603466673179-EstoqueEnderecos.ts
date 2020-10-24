import {MigrationInterface, QueryRunner} from "typeorm";

export class EstoqueEnderecos1603466673179 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table if not exists estoque_enderecos (
                                                 id serial not null primary key,
                                                 zona varchar not null,
                                                 rua varchar not null,
                                                 coluna varchar not null,
                                                 nivel varchar not null,
                                                 reserva boolean default false not null,
                                                 endereco_alocado boolean default false not null,
                                                 ativo boolean not null,
                                                 "createdAt" timestamp default now() not null,
                                                 "updatedAt" timestamp default now() not null,
                                                 estoque_id_fk integer ,
                                                 lotes_id_fk   integer unique ,
                                                 constraint estoque_enderecos_lotes foreign key (lotes_id_fk) references lotes (id),
                                                 constraint estoque_enderecos_estoque foreign key (estoque_id_fk) references estoques (id)
);
        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
