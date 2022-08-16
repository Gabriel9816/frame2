import { DataSource } from 'typeorm';
import { CreateCatDto } from './cats/dto/cats.dto';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost', //colcoar aqui do serviço do docker
        port: 3306,
        username: 'Gabriel',
        password: '123',
        database: 'frame2',
        entities: [CreateCatDto],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
