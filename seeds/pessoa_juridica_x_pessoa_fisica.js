
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pessoa_juridica_x_pessoa_fisica').del()
    .then(function () {
      // Inserts seed entries
      return knex('pessoa_juridica_x_pessoa_fisica').insert([
        {
          id_pessoa_juridica: 1,
          id_pessoa_fisica: 3,
        },
        {
          id_pessoa_juridica: 2,
          id_pessoa_fisica: 2,
        },
        {
          id_pessoa_juridica: 3,
          id_pessoa_fisica: 1,
        }
      ]);
    });
};
