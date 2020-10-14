import {Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
    ManyToOne,
JoinColumn} from "typeorm";
import { GrupoUsuarios } from "./GrupoUsuarios";

@Entity()
export class Usuarios {

@PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

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
    usuariosIdfK: GrupoUsuarios

    
}
