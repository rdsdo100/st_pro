import ExemplosController from '../controller/ExemplosController'
import GurpoUsuarioController from '../controller/GurpoUsuarioController';
import Inicio from '../controller/Inicio'
import UsuaruiosController from "../controller/usuario/UsuaruiosController";
import Estoque from "../controller/estoque/EstoqueController";
import SkuController from "../controller/sku/SkuController";
import EnderecoEstoqueController from "../controller/estoque/EnderecoEstoqueController";
import LoginController from "../controller/usuario/LoginController";
import LoteController from "../controller/sku/LoteController";
import ArmazenarController from "../controller/estoque/ArmazenarController";
import TestController from '../controller/TesteController';
import UsuarioEstoqueController from "../controller/usuario/usuarioEstoqueController";


const inicio = new Inicio()
const exemplos = new ExemplosController()
const usuario = new UsuaruiosController()
const grupoUsusarios = new GurpoUsuarioController()
const estoque = new Estoque()
const enderecoEstoque = new EnderecoEstoqueController()
const sku = new SkuController()
const login = new LoginController()
const lote = new LoteController()
const armazenar = new ArmazenarController()
const testController = new TestController()
const usuarioEstoqueController = new UsuarioEstoqueController()

export const routes = [
    inicio, 
    exemplos,
    usuario,
    grupoUsusarios,
    estoque,
    enderecoEstoque,
    sku,
    login,
    lote,
    armazenar,
    testController,
    usuarioEstoqueController
]