import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Usuarios } from "./Usuarios";

@Entity({name: 'grupo_usuarios'})
export class GrupoUsuarios {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;


    @OneToMany(() => Usuarios, (usuarios) => usuarios.usuariosIdfK)
    usuarios:Usuarios[];

}
