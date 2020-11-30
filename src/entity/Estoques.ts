import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {EstoqueEnderecos} from "./EstoqueEnderecos";
import {UsuarioEstoque} from "./UsuarioEstoque";


@Entity()
export class Estoques extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'nome_estoque'})
    nomeEstoque: string



    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;

    @OneToMany(() => EstoqueEnderecos, (estoqueEnderecos) => estoqueEnderecos.estoqueIdfK)
    estoqueEnderecos:EstoqueEnderecos[];

    @OneToMany(() => UsuarioEstoque, (usuariosEstoque) => usuariosEstoque.estoquesIdFk)
    usuarioEstoque:UsuarioEstoque[];

}