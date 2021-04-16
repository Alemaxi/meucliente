
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pessoa_fisica').del()
    .then(function () {
      // Inserts seed entries
      return knex('pessoa_fisica').insert([
        {
          nome: 'José maria',
          data_nascimento: '2021-04-06',
          cpf: '12341234',
          rg: '21241234',
          email: 'joma@gmail.com'
        },
        {
          nome: 'Airton irton',
          data_nascimento: '1954-10-06',
          cpf: '123452355',
          rg: '912312341',
          email: 'Airirto@gmail.com'
        },
        {
          nome: 'Roselaine Rosa',
          data_nascimento: '1980-06-20',
          cpf: '35123341',
          rg: '6234523452',
          email: 'RoseRosa@gmail.com'
        }
      ]);
    });
};
