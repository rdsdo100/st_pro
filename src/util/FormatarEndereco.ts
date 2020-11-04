interface IEnderecos{
    estoque?: string,
    zona: string,
    rua: string,
    coluna: string,
    nivel: string
}

const  formatEndereco = (enderecos:IEnderecos) :string => {
    let enderecoFormatado: string

    if((enderecos.zona.length === 3) &&
        (Number(enderecos.rua) <= 99)&&
        (Number(enderecos.coluna) <= 999)
        && (Number(enderecos.rua) <= 9)
    ){
        const zona = (`00${enderecos.zona}` ).slice(-3)
        const rua = (`00${enderecos.rua}` ).slice(-2)
        const coluna = (`000${enderecos.rua}` ).slice(-3)
        const nivel = (`000${enderecos.rua}` ).slice(-3)
        enderecoFormatado = zona + rua + coluna + nivel
    }else {
        enderecoFormatado = 'Endereco Invalido'
    }

    return  enderecoFormatado

}

export {formatEndereco};