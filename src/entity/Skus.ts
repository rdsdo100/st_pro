import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Estoques} from "./Estoques";
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

    @Column()
    ativo : boolean

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;






    @OneToMany( () => Lotes , (lotes) =>lotes.skuIdfK )
    lote: Lotes


}