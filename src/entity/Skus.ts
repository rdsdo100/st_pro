import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Lotes} from "./Lotes";

@Entity()
export class Skus {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'nome_sku'})
    nomesku: string

    @Column({name: 'shelf_life'})
    shelfLife: number

    @Column({name: 'codigo_ncm'})
    codigoNCM : string

    @Column({name: 'codigo_ean'})
    codigoEan : string

    @Column({name: 'unidade_venda'})
    unidadeVenda : string

    @Column({name:"codigo_proximo_lote"})
    codigoProximoLote: number

    @Column()
    ativo : boolean

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;






    @OneToMany( () => Lotes , (lotes) =>lotes.skuIdfK )
    lote: Lotes


}