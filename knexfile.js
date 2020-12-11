module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/project-manager.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
  },
};
