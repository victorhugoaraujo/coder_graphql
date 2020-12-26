const { usuarios, perfis } = require('../data/db');

module.exports = {
  ola(){
    return 'string'
  },
  horaAtual(){
    return `${new Date}`
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: 'Victor',
      email: 'victor@gmail.com',
      idade: 29,
      salario_real: 10000,
      vip: true  
    }
  },
  produtoEmDestaque(){
    return {
      nome: 'Mouse',
      preco: 79.90,
      desconto: 0.5,
    }
  },
  numerosMegaSena(){
    // return [4,8,13,27,33,54]
    const crescente = (a,b) => a - b
    return Array(6).fill(0)
    .map(n => parseInt(Math.random() * 60 + 1))
    .sort(crescente)
  },
  usuarios(){
    return usuarios
  },
  usuario(_, { id }) {
    const sels = usuarios.filter(u => u.id == id)
    return sels ? sels[0] : null
  },
  perfis() {
    return perfis
  },
  perfil(_, {id}) {
    const selected = perfis.filter(perfil => perfil.id === id)
    return selected ? selected[0] : null
  }
}