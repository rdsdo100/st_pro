import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

import {Zona} from "./Zona";


@Entity()
export class Estoque {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'nome_estoque'})
    nomeEstoque: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;




    @OneToMany(() => Zona, (zona) => zona.estoqueIdfK)
    zona:Zona[];

}
