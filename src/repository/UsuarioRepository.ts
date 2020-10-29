import {getManager} from "typeorm";
import {Usuarios} from "../entity/Usuarios";

const cadastrarUsuarioRepository = async (usuario : Usuarios)=>{
    const usuarioRepository = getManager()
    return await usuarioRepository.save(usuario)
}

const buscarUsuarioRepository = async (nomeUsuario : string)=>{
    const usuarioRepository = getManager()
    return usuarioRepository.findOne(Usuarios , {nomeUsuario : nomeUsuario} )
}

const buscarUsuarioIdRepository = async (idUsuario : number)=>{
    const usuarioRepository = getManager()
    return usuarioRepository.findOne(Usuarios , idUsuario)
}

const listUsuarioRepository = async ()=>{
    const usuarioRepository = getManager()
    return usuarioRepository.find(Usuarios)

}

const updateUsuarioRepository = async (usuarios : Usuarios)=>{
    const usuarioRepository = getManager()
}

const deleteUsuarioIdRepository = async (idUsuario : number) => {
    const usuarioRepository = getManager()
    return usuarioRepository.delete(Usuarios , idUsuario)
}
export {cadastrarUsuarioRepository ,
    buscarUsuarioRepository,
    buscarUsuarioIdRepository,
    listUsuarioRepository,
    updateUsuarioRepository,
    deleteUsuarioIdRepository
}