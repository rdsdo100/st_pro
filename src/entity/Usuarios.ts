import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn, BaseEntity, OneToMany
} from "typeorm";
import { GrupoUsuarios } from "./GrupoUsuarios";
import {UsuarioEstoque} from "./UsuarioEstoque";

@Entity()
export class Usuarios extends BaseEntity {

@PrimaryGeneratedColumn()
    id: number

    @Column({name: "nome_usuario"})
    nomeUsuario: string

    @Column({unique:true})
    email: string

    @Column()
    senha: string

    @Column()
    matricula: string

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;


    @ManyToOne(() => GrupoUsuarios, (grupoUsuaruios) => grupoUsuaruios.usuarios, {eager: true})
    @JoinColumn([{name: "grupo_usuarios_id_fk", referencedColumnName: "id"}])
    grupoUsuariosIdFk: GrupoUsuarios

    @OneToMany(() => UsuarioEstoque, (usuariosEstoque) => usuariosEstoque.usuarioIdFk)
    usuarioEstoque:UsuarioEstoque[];
    
}
