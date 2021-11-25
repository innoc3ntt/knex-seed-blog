module.exports = {
  development: {
    client: "pg",
    connection: { user: "me", password: "password", database: "postgres" },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
};
