import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database.module';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { dogsProviders } from './dogs.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DogsController],
  providers: [...dogsProviders, DogsService],
})
export class DogsModule {}
