import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database.module';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './entity/dogs.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Dog])],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
