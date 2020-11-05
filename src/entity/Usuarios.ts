import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn, BaseEntity
} from "typeorm";
import { GrupoUsuarios } from "./GrupoUsuarios";

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

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;


    @ManyToOne(() => GrupoUsuarios, (grupoUsuaruios) => grupoUsuaruios.usuarios, {eager: true})
    @JoinColumn([{name: "grupo_usuarios_id_fk", referencedColumnName: "id"}])
    grupoUsuariosIdFk: GrupoUsuarios

    
}
