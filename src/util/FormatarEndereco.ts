interface IEnderecos{
    estoque?: string,
    zona: string,
    rua: string,
    coluna: string,
    nivel: string
}

const  formatarEndereco = (enderecos:IEnderecos) :string => {
    let enderecoFormatado: string

    if((enderecos.zona.length === 3 )&&
    (enderecos.rua.length <= 2)&&
(enderecos.coluna.length <= 3) &&
(enderecos.nivel.length <= 1)    
){

        const zona = (`00${enderecos.zona}` ).slice(-3)
        const rua = (`00${enderecos.rua}` ).slice(-2)
        const coluna = (`000${enderecos.coluna}` ).slice(-3)
        enderecoFormatado = zona + rua + coluna + enderecos.nivel
       
    }else {
        enderecoFormatado = 'Endereco Invalido'
    }


   

    return  enderecoFormatado

}

export {formatarEndereco};