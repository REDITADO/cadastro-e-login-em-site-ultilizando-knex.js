
exports.up = function(knex) {
   return knex.schema.createTable('users',table=>{
        table.increments('id')
        table.string("userName",28).notNullable().unique()
        table.string("eMail",48).notNullable()
        table.string("senha",28).notNullable()
        table.string('foto',500)

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  
};

exports.down =knex=> knex.schema.dropTable('users')
