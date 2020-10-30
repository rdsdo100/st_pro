import {getConnection, getManager} from "typeorm";
import {Usuarios} from "../entity/Usuarios";

const cadastrarUsuarioRepository = async (usuario : Usuarios) : Promise<object>=>{

    let usuarioRetorno
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        usuarioRetorno =  await queryRunner.manager.findOne(Usuarios , {nomeUsuario : usuario.nomeUsuario} );
        if(usuarioRetorno?.nomeUsuario === ''){
            usuarioRetorno = await queryRunner.manager.save(usuario)
        }else {
            usuarioRetorno = { mensage: "usuario não cadastrodo!" , ...usuario}
        }
        await queryRunner.commitTransaction();
    } catch (err) {

        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return { ...usuarioRetorno}
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