import {getManager} from "typeorm";
import {UsuarioEstoque} from "../entity/UsuarioEstoque";

const buscarEstoqueUsuarioRepository = async (nomeUsuario : string)=>{

    const skuRepository = getManager()
    return await skuRepository.find(UsuarioEstoque)

}