module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "obada4047",
      database: "Jordanian-Elections-Project",
    },
    migrations: {
      directory: "./migrations", // مسار المجلد الذي يحتوي على ملفات المايقريشن
    },
    seeds: {
      directory: "./seeds", // مسار المجلد الذي يحتوي على ملفات السييد
    },
  },
};
