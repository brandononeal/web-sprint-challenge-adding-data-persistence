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
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run("PRAGMA foreign_keys = ON", done);
    //   },
    // },
  },
  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/test.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run("PRAGMA foreign_keys = ON", done);
    //   },
    // },
  },
};
