import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Sku {

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

}
