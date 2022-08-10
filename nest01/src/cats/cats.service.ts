import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/cats.dto';

@Injectable()
export class CatsService {
  private readonly cats: CreateCatDto[] = [];

  create(createCatDto: CreateCatDto) {
    this.cats.push(createCatDto);
  }

  findAll(): CreateCatDto[] {
    return this.cats;
  }
}
