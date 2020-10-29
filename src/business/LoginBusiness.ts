import {assinar} from "../config/Jwt";
import {buscarUsuarioRepository} from "../repository/UsuarioRepository";

export default class LoginBusiness {

    async index(){

    }

    async login(nomeUsuario: string , senha : string) {

        try {

            const getUsuario = await buscarUsuarioRepository(nomeUsuario)

            const authorization =   assinar(
                Number(getUsuario?.id)
                , String(getUsuario?.nomeUsuario)
                , Number(getUsuario?.grupoUsuariosIdFk.id)

            )
            return {
                authorization : authorization}

        } catch (error) {

        }
    }
}