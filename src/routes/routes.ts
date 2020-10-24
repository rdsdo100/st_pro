import ExemplosController from '../controller/ExemplosController'
import GurpoUsuarioController from '../controller/GurpoUsuarioController';
import Inicio from '../controller/Inicio'
import UsuaruiosController from "../controller/UsuaruiosController";
import Estoque from "../controller/estoque/EstoqueController";
import SkuController from "../controller/sku/SkuController";
import EnderecoEstoqueController from "../controller/estoque/EnderecoEstoqueController";
import LoginController from "../controller/LoginController";


const inicio = new Inicio()
const exemplos = new ExemplosController()
const usuario = new UsuaruiosController()
const grupoUsusarios = new GurpoUsuarioController()
const estoque = new Estoque()
const enderecoEstoque = new EnderecoEstoqueController()
const sku = new SkuController()
const login = new LoginController()


export const routes = [
    inicio, 
    exemplos,
    usuario,
    grupoUsusarios,
    estoque,
    enderecoEstoque,
    sku,
    login


]