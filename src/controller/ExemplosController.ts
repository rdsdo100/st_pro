import { Controller, Get } from "@overnightjs/core";
import {Request, Response} from "express";

@Controller('exemplos')
export default class ExemplosController {

    @Get('rotas')
    exemploRotas (_: Request , response: Response){
        response.json({

                usuarios: {
                    usuarios: {
                        rota: "/user",
                        requisicao: {
                            get: {
                                heades: {},
                                params: "",
                                body: {}
                            },
                            post: {
                                heades: {},
                                params: "",
                                body: {
                                    "nome": "string",
                                    "email": "string",
                                    "senha": "string",
                                    "matricula": "string",
                                    "grupoUsuario": "number"
                                }
                            },
                            delete: {
                                heades: {},
                                params: "/number",
                                body: {}
                            },
                            update: {
                                heades: {},
                                params: "/number",
                                body: {}
                            }
                        }

                    },
                    gupoUsuario: {
                        rota: "/gupo-usuario",
                        requisicao: {
                            get: {
                                heades: {},
                                params: "",
                                body: {}
                            },
                            post: {
                                heades: {},
                                params: "",
                                body: {}
                            }
                            ,
                            delete: {
                                heades: {},
                                params: "/number",
                                body: {}
                            },
                            update: {
                                heades: {},
                                params: "/number",
                                body: {}
                            }
                        }

                    }


                },



}
        )

    }

    @Get('login')
    exemplologin (_: Request , response: Response){
        response.json({})
    }

    @Get('estoques')
    exemploEstoque (_: Request , response: Response){
        response.json(
            {
                estoque: {
                    rota: "/estoques",
                    requisicao: {
                        get: {
                            heades: {},
                            params: "",
                            body:{}
                        },
                        post: {
                            heades: {},
                            params: "",
                            body:{
                                "nomeEstoque" : "string"
                            }
                        },
                        delete: {
                            heades: {},
                            params: "/number",
                            body:{}
                        },
                        update:{ heades: {},
                            params: "/number",
                            body:{}}
                    }
                },
                "estoque-endereco": {
                    rota: "/estoques-endereco",
                    requisicao: {
                        get: {
                            heades: {},
                            params: "",
                            body:{}
                        },
                        post: {
                            heades: {},
                            params: "",
                            body:{
                                "estoque" : "number" ,
                                "zona": "string",
                                "ruaI" : "number" ,
                                "ruaF" : "number" ,
                                "colunaI" : "number" ,
                                "colunaF" : "number"  ,
                                "nivelI" : "number"  ,
                                "nivelF" : "number"
                            }
                        },
                        delete: {
                            heades: {},
                            params: "/number",
                            body:{}
                        },
                        update:{ heades: {},
                            params: "/number",
                            body:{}}
                    }
                }
            }
        )
    }

    @Get('sku')
    exemploSku (_: Request , response: Response){
        response.json(
            {
                sku: {
                    rota: "/sku",
                    requisicao: {
                        get: {
                            heades: {},
                            params: "",
                            body:{}
                        },
                        getId: {
                            heades: {},
                            params: "/sku/:id",
                            body:{}
                        },

                        post: {
                            heades: {},
                            params: "",
                            body:{
                                "nomesku" : "string",
                                "ativo" : "boolea",
                                "codigoEan" : "string",
                                "codigoNCM" : "string",
                                "shelfLife" : "number",
                                "unidadeVenda" : "string"
                            }
                        },
                        delete: {
                            heades: {},
                            params: "/number",
                            body:{}
                        },
                        update:{ heades: {},
                            params: "/number",
                            body:{}}
                    }
                },


            }
        )
    }

    @Get('endereco')
    exemploEndereco(_: Request , response: Response){
        response.json(
            {
            "estoque-endereco": {
                rota: "/estoques-endereco",
                requisicao: {
                    get: {
                        heades: {},
                        params: "",
                        body:{}
                    },
                    post: {
                        heades: {},
                        params: "",
                        body:{
                            "estoque" : "number" ,
                            "zona": "string",
                            "ruaI" : "number" ,
                            "ruaF" : "number" ,
                            "colunaI" : "number" ,
                            "colunaF" : "number"  ,
                            "nivelI" : "number"  ,
                            "nivelF" : "number"
                        }
                    },
                    delete: {
                        heades: {},
                        params: "/number",
                        body:{}
                    },
                    update:{ heades: {},
                        params: "/number",
                        body:{}}
                }
            },
        })
    }

    @Get('lote')
    exemploLote (_: Request , response: Response){
        response.json(
            {


            }
        )
    }
}



