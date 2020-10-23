import {
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    ManyToOne,
    OneToMany, OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import Sku from "../controller/sku/Sku";
import {Skus} from "./Skus";
import {Estoques} from "./Estoques";
import {EstoqueEnderecos} from "./EstoqueEnderecos";

@Entity()
export class Lotes {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'codigo_lote'})
    codigoLote: string

    @Column()
    quantidade: number

    @Column({type: "date"})
    dataFabricacao: Date

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @ManyToOne(() => Skus, (skus) => skus.lote, {eager: true})
    @JoinColumn([{name: "sku_id_fk", referencedColumnName: "id"}])
    skuIdfK: Skus

    @OneToOne(() => EstoqueEnderecos, estoqueEnderecos => estoqueEnderecos.lote) // specify inverse side as a second parameter
    estoqueEnderecos: EstoqueEnderecos;
}
