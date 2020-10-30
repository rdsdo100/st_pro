import {Usuarios} from "../entity/Usuarios";
import {getRepository} from "typeorm";

export default class UsuarioBusiness{

    async cadastroUsuarios(usuarios : Usuarios){

        const setUsuarios = getRepository(Usuarios)


    }

    async deletarUsuario(idDeletar : number){

        const setUsuarios = getRepository(Usuarios)

        const resposta = await setUsuarios.findOne({
            where: {
                id : idDeletar
            }
        })
        return resposta
    }

}
