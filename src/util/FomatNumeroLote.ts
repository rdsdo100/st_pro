const  formatNumeroLote = (numeroLote: string) => {
    const skuformatado = (`00000${numeroLote}` ).slice(-6)
    return skuformatado

}

export {formatNumeroLote};