import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Estoque} from "./Estoque";
import {Zona} from "./Zona";

@Entity()
export class Rua {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'nome_rua'})
    nomerua: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @ManyToOne(() => Zona, (zona) => zona.rua, {eager: true})
    @JoinColumn([{name: "zona_id_fk", referencedColumnName: "id"}])
    zonaIdfK: Zona

}
