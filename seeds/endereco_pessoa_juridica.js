
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('endereco_pessoa_juridica').del()
    .then(function () {
      // Inserts seed entries
      return knex('endereco_pessoa_juridica').insert([
        {
          descricao: 'um endereco ai',
          complemento: 'casa',
          nome_logradouro: 'Rua do além',
          estado: 'Rio Grande do sul',
          bairro: 'Bela vista',
          cep: '26623000',
          cidade: 'Rondonopolis',
          numero: 1550,
          id_pessoa_juridica: 1
        },
        {
          descricao: 'Não chegar antes de meio dia',
          complemento: 'apartamento 1010',
          nome_logradouro: 'Rua sem nome',
          estado: 'Rio Grande do Norte',
          bairro: 'Sorriso espontâneo',
          cep: '26012100',
          cidade: 'Brisa solta',
          numero: 23,
          id_pessoa_juridica: 2
        },
        {
          descricao: 'Não vir muito cedo...',
          complemento: 'casa fundos',
          nome_logradouro: 'Rua distante',
          estado: 'Mato Grosso',
          bairro: 'Bom começo',
          cep: '22100100',
          cidade: 'Cruzeiro do sul',
          numero: 4444,
          id_pessoa_juridica: 3
        }
      ]);
    });
};
