import Exemplos from '../controller/Exemplos'
import GurpoUsuarioController from '../controller/GurpoUsuarioController';
import Inicio from '../controller/Inicio'
import UsuaruiosController from "../controller/UsuaruiosController";
import Estoque from "../controller/estoque/Estoque";


const inicio = new Inicio()
const exemplos = new Exemplos()
const usuario = new UsuaruiosController()
const grupoUsusarios = new GurpoUsuarioController()
const estoque = new Estoque()


export const routes = [
    inicio, 
    exemplos,
    usuario,
    grupoUsusarios,
    estoque


]