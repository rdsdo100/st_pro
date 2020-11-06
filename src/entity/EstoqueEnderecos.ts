import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne, OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Estoques} from "./Estoques";
import {Lotes} from "./Lotes";

@Entity()
export class EstoqueEnderecos extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    zona: number

    @Column()
    rua: number

    @Column()
    coluna: number

    @Column()
    nivel: number

    @Column()
    ativo:boolean

    @Column({default: false})
    reserva: boolean

    @Column({name:"endereco_alocado" , default: false})
     enderecoAlocado : boolean

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @ManyToOne(() => Estoques, (estoques) => estoques.estoqueEnderecos, {eager: true})
    @JoinColumn([{name: "estoque_id_fk", referencedColumnName: "id"}])
    estoqueIdfK: Estoques


    @OneToOne(() => Lotes    , lotes => lotes.estoqueEnderecos) // specify inverse side as a second parameter
    @JoinColumn([{name: "lotes_id_fk", referencedColumnName: "id"}])
    lote: Lotes;

}
