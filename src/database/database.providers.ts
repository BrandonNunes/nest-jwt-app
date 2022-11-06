import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.TYPEORM_DATABASE_HOST,
        port: +process.env.TYPEORM_DATABASE_PORT,
        username: process.env.TYPEORM_DATABASE_USER,
        password: process.env.TYPEORM_DATABASE_PASSWORD,
        database: process.env.TYPEORM_DATABASE_NAME,
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
