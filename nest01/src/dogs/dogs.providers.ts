import { Dog } from './entity/dogs.entity';
import { DataSource } from 'typeorm';

export const dogsProviders = [
  {
    provide: 'DOGS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Dog),
    inject: ['NEST001DATASOURCE'],
  },
];
