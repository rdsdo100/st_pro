import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Skus} from "./Skus";
import {EstoqueEnderecos} from "./EstoqueEnderecos";

@Entity()
export class Lotes extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'codigo_lote'})
    codigoLote: string

    @Column()
    quantidade: number

    @Column({name: "data_fabricacao"})
    dataFabricacao: Date

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;

    @ManyToOne(() => Skus, (skus) => skus.lote, {eager: true})
    @JoinColumn([{name: "sku_id_fk", referencedColumnName: "id"}])
    skuIdfK: Skus

    @OneToOne(() => EstoqueEnderecos, estoqueEnderecos => estoqueEnderecos.loteIdfK) // specify inverse side as a second parameter
    estoqueEnderecos: EstoqueEnderecos;
}
