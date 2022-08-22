import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { catsProviders } from './cats.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [...catsProviders, CatsService],
})
export class CatsModule {}
