const { perfis } = require('../data/db') 

module.exports = {
  salario(usuario) {
    return usuario.salario_real
  },
  perfil(usuario) {
    const selected = perfis.filter(perfil => perfil.id === usuario.perfilId)
    return selected ? selected[0] : null
  }
}