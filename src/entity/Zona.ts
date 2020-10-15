import {
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

import {Estoque} from "./Estoque";
import {Rua} from "./Rua";

@Entity()
export class Zona {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'nome_zona'})
    nomeZona: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;





    @ManyToOne(() => Estoque, (estoque) => estoque.zona, {eager: true})
    @JoinColumn([{name: "estoque_id_fk", referencedColumnName: "id"}])
    estoqueIdfK: Estoque



    @OneToMany(() => Rua, (rua) => rua.zonaIdfK)
    rua:Rua[];



}
