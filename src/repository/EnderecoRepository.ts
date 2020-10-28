import {getManager} from "typeorm";
import {EstoqueEnderecos} from "../entity/EstoqueEnderecos";

const cadastrarEstoqueEnderecosRepository = async (estoqueEnderecos : EstoqueEnderecos)=>{
    const estoqueEnderecosRepository = getManager()
    return await estoqueEnderecosRepository.save(estoqueEnderecos)
}

const buscarEstoqueEnderecosRepository = async (codigoEstoqueEnderecos : number)=>{
    const estoqueEnderecosRepository = getManager()
    return estoqueEnderecosRepository.findOne(EstoqueEnderecos , codigoEstoqueEnderecos )
}

const buscarEstoqueEnderecosIdRepository = async (idEstoqueEnderecos : number)=>{
    const estoqueEnderecosRepository = getManager()
    return estoqueEnderecosRepository.findOne(EstoqueEnderecos , idEstoqueEnderecos)
}

const listEstoqueEnderecosRepository = async ()=>{
    const estoqueEnderecosRepository = getManager()
    return estoqueEnderecosRepository.find(EstoqueEnderecos)

}

const updateEstoqueEnderecosRepository = async (estoqueEnderecoss : EstoqueEnderecos)=>{
    const estoqueEnderecosRepository = getManager()
}

const deleteEstoqueEnderecosIdRepository = async (idEstoqueEnderecos : number) => {
    const estoqueEnderecosRepository = getManager()
    return estoqueEnderecosRepository.delete(EstoqueEnderecos , idEstoqueEnderecos)
}
export {cadastrarEstoqueEnderecosRepository ,
    buscarEstoqueEnderecosRepository,
    buscarEstoqueEnderecosIdRepository,
    listEstoqueEnderecosRepository,
    updateEstoqueEnderecosRepository,
    deleteEstoqueEnderecosIdRepository
}