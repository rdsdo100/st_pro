const  formatSku = (sku: string) => {
     const skuformatado = (`00000${sku}` ).slice(-5)
return skuformatado

}

export {formatSku};