const connectionString = process.env.DB_CONNECTION_STRING;
const otherConnectionString = 'postgres://xkscfwhexwkvfz:b2ea5d82a0716785e24c07af9f7ac175ffe3594d72d3386a38277280a491f684@ec2-52-72-125-94.compute-1.amazonaws.com:5432/deai91bpi9bc0s'
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
      otherConnectionString,
      ssl: {
        rejectUnauthorized: false,
      },
      database: 'deai91bpi9bc0s',
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
