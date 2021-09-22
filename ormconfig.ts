module.exports = [
  {
    name: 'production',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'plsoftware_dev',
    synchronize: true,
    logging: false,
    entities: [
      'dist/entity/**/*.js'
    ],
    migrations: [
      'dist/migration/**/*.js'
    ],
    subscribers: [
      'dist/subscriber/**/*.js'
    ],
    cli: {
      entitiesDir: 'dist/entity',
      migrationsDir: 'dist/migration',
      subscribersDir: 'dist/subscriber'
    }
  },
  {
    name: 'development',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'plsoftware_dev',
    synchronize: true,
    logging: false,
    entities: [
      'src/entity/**/*.ts'
    ],
    migrations: [
      'src/migration/**/*.ts'
    ],
    subscribers: [
      'src/subscriber/**/*.ts'
    ],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber'
    }
  },
  {
    name: 'test',
    type: 'sqlite',
    database: 'src/__tests__/database.sqlite',
    synchronize: true,
    logging: false,
    entities: [
      'src/entity/**/*.ts'
    ],
    migrations: [
      'src/migration/**/*.ts'
    ],
    subscribers: [
      'src/subscriber/**/*.ts'
    ],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber'
    }
  }
];
