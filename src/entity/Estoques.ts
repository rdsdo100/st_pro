import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";


import {EstoqueEnderecos} from "./EstoqueEnderecos";


@Entity()
export class Estoques {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'nome_estoque'})
    nomeEstoque: string



    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;




    @OneToMany(() => EstoqueEnderecos, (estoqueEnderecos) => estoqueEnderecos.estoqueIdfK)
    estoqueEnderecos:EstoqueEnderecos[];

}