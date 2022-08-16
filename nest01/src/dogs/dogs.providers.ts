import { DataSource } from 'typeorm';
import { CreateDog } from './entity/createdogs.entity';

export const dogsroviders = [
  {
    provide: 'DOGS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CreateDog),
    inject: ['DATA_SOURCE'],
  },
];
