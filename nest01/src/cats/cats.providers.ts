import { DataSource } from 'typeorm';
import { CreateCat } from './entity/createcats.entity';

export const catsProviders = [
  {
    provide: 'CATS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CreateCat),
    inject: ['DATA_SOURCE'],
  },
];
