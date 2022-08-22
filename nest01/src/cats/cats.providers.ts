import { Cat } from './entity/cats.entity';
import { DataSource } from 'typeorm';

export const catsProviders = [
  {
    provide: 'CATS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cat),
    inject: ['NEST001DATASOURCE'],
  },
];
