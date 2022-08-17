import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { catsProviders } from './cats.providers';
import { CatsService } from './cats.service';

@Module({
  imports: [DatabaseModule],
  providers: [...catsProviders, CatsService],
})
export class PhotoModule {}
