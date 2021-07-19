const connectionString = process.env.DB_CONNECTION_STRING;
const databaseUrl = process.env.DATABASE_URL;

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
      databaseUrl,
      ssl: {
        rejectUnauthorized: false,
      },
      database: 'crud_app_raykell',
      user: 'username',
      password: 'password'
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
