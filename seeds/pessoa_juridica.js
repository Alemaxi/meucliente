
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pessoa_juridica').del()
    .then(function () {
      // Inserts seed entries
      return knex('pessoa_juridica').insert([
        {razao_social:'Bramix extra', email: "Algo@gmail.com",nome_fantasia:"Bramix"},
        {razao_social:'Cozart red LTDA', email: "Cozar@gmail.com",nome_fantasia:"Cozart"},
        {razao_social:'Resort Real SA', email: "resort@gmail.com",nome_fantasia:"Resort Real"},
      ]);
    });
};
