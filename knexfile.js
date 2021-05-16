// Update with your config settings.

module.exports = {

  development: {
        client: 'mysql',
    connection: {
      database: 'noticias',
      user:     'user',
      password: 'password',
      
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:`${__dirname}/src/migrations`
    }
  }



};
