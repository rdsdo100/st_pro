import {MigrationInterface, QueryRunner} from "typeorm";

export class EstoqueEnderecos1603466673179 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table if not exists estoque_enderecos (
                                                 id serial not null primary key,
                                                 zona integer not null,
                                                 rua integer not null,
                                                 coluna integer not null,
                                                 nivel integer not null,
                                                 reserva boolean default false not null,
                                                 endereco_alocado boolean default false not null,
                                                 ativo boolean not null,
                                                 estoque_id_fk integer ,
                                                 lotes_id_fk   integer unique ,
                                                 constraint estoque_enderecos_lotes foreign key (lotes_id_fk) references lotes (id),
                                                 constraint estoque_enderecos_estoque foreign key (estoque_id_fk) references estoques (id),
                                                created_at timestamp default now() not null,
                                                updated_at timestamp default now() not null
);
        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
