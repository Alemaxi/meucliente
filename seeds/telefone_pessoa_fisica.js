
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('telefone_pessoa_fisica').del()
    .then(function () {
      // Inserts seed entries
      return knex('telefone_pessoa_fisica').insert([
        {
          numero_contato: '12344',
          ddd: '22',
          descricao: 'Comercial',
          id_pessoa_fisica: 1
        },
        {
          numero_contato: '33344',
          ddd: '23',
          descricao: 'residencial',
          id_pessoa_fisica: 2
        },
        {
          numero_contato: '559392',
          ddd: '31',
          descricao: 'Recado apenas',
          id_pessoa_fisica: 3
        }
      ]);
    });
};
