import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Estoques} from "./Estoques";

@Entity()
export class EstoqueEnderecos {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    zona: string

    @Column()
    rua: string

    @Column()
    coluna: string

    @Column()
    nivel: string


    @Column()
    ativo:boolean

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @ManyToOne(() => Estoques, (estoques) => estoques.estoqueEnderecos, {eager: true})
    @JoinColumn([{name: "estoque_id_fk", referencedColumnName: "id"}])
    estoqueIdfK: Estoques

}
