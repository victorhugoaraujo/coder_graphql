module.exports = { 
  precoComDesconto(produto) {
    const {preco, desconto} = produto
    const precoDesconto = !!desconto && preco * (1 - desconto) || preco
    return precoDesconto;
  }
}