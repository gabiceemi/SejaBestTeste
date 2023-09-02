module.exports = {
  type: 'postgres',
  port: 'localhost',
  host: 5432,
  username: 'docker',
  password: 'sejabestteste',
  database: 'sejabestteste',
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  entities: ['./src/modules/**/entities/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};
