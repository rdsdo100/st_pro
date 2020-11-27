import {CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({name:"usuario_estoque"})
export class UsuarioEstoque {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;
}
