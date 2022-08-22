import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entity/cats.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
