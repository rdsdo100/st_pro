interface IEnderecos{
    estoque?: string,
    zona: string,
    rua: string,
    coluna: string,
    nivel: string
}

const  converterEndereco = (enderecos:string)  => {
    let enderecoConvertido

    if(enderecos.length === 9) {

        const zona: string = enderecos.substring(0, 3)
        const rua: string = enderecos.substring(3, 5)
        const coluna: string = enderecos.substring(5, 8)
        const nivel: string = enderecos.substring(8, 9)

        enderecoConvertido = {
            zona,
            rua,
            coluna,
            nivel,
        }
    }else {
        enderecoConvertido = "Endereco Invalido!"
    }

    return enderecoConvertido

}

export {converterEndereco};