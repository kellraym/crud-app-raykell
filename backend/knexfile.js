const connectionString = process.env.DB_CONNECTION_STRING;

module.exports = {

  development: {
    client: 'pg',
    connection: connectionString || 'postgres://postgres:docker@localhost/crud_app_raykell'
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
      }
      // database: 'my_db',
      // user: 'username',
      // password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
