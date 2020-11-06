interface IEnderecos{
    estoque?: number,
    zona?: number,
    rua?: number,
    coluna?: number,
    nivel?: number
    message?: string
}

const  converterEndereco = (enderecos:string)  => {
    let enderecoConvertido: IEnderecos

    if(enderecos.length === 9) {

        const zona: string = enderecos.substring(0, 3)
        const rua: string = enderecos.substring(3, 5)
        const coluna: string = enderecos.substring(5, 8)
        const nivel: string = enderecos.substring(8, 9)

        enderecoConvertido = {
            zona: Number(zona),
            rua: Number(rua),
            coluna: Number(coluna),
            nivel: Number(nivel),
        }
    }else {
        enderecoConvertido = {message : "Endereco Invalido!"}
    }

    return enderecoConvertido

}

export {converterEndereco};