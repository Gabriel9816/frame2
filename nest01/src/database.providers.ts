import { Dog } from './dogs/entity/dogs.entity';
import { Cat } from './cats/entity/cats.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'NEST001DATASOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'dbmysql',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'dbframe',
        entities: [Cat, Dog],
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
