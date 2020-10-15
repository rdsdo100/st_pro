import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Nivel {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'nome_nivel'})
    nomeNivel: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

}
