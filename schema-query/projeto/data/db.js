const usuarios = [{
  id: 1,
  nome: 'Victo Hugo',
  email: 'victor@gmail.com',
  idade: 29,
  perfilId: 1,
  status: 'ATIVO'
},{
  id: 2,
  nome: 'Silvana',
  email: 'silvana@gmail.com',
  idade: 34,
  perfilId: 1,
  status: 'INATIVO'
},{
  id: 3,
  nome: 'Joao Guilherme',
  email: 'joao@gmail.com',
  idade: 12,
  perfilId: 2,
  status: 'BLOQUEADO'
},
]

const perfis = [{
  id: 1,
  nome: 'Comum'
},{
  id: 2,
  nome: 'Administrador'
}
]

module.exports = { usuarios, perfis }