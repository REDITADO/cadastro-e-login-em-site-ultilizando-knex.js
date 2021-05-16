
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userName:'luis',eMail:'jose@gmail',senha:'123', foto:'https://source.unsplash.com/random?'}
      ]);
    });
};
