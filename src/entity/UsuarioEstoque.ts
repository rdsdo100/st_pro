import {CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Estoques} from "./Estoques";
import {Usuarios} from "./Usuarios";

@Entity({name:"usuario_estoque"})
export class UsuarioEstoque {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Estoques, (estoques) => estoques.usuarioEstoque, {eager: true})
    @JoinColumn([{name: "estoque_id_fk", referencedColumnName: "id"}])
    estoquesIdFk: Estoques

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.usuarioEstoque, {eager: true})
    @JoinColumn([{name: "usuario_id_fk", referencedColumnName: "id"}])
    usuarioIdFk: Usuarios

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;
}
