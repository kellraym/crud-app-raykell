const connectionString = process.env.DB_CONNECTION_STRING;

module.exports = {

  development: {
    client: 'pg',
    connection: databaseUrl || connectionString || 'postgres://postgres:docker@localhost/crud_app_raykell'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      connectionString,
      ssl: {
        rejectUnauthorized: false,
      },
      database: 'crud_app_raykell',
      user: 'xkscfwhexwkvfz',
      password: 'b2ea5d82a0716785e24c07af9f7ac175ffe3594d72d3386a38277280a491f684'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
