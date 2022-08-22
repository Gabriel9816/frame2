import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Cat } from './entity/cats.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  create(cat: Cat): void {
    this.catsRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  async findOne(catId: string): Promise<Cat> {
    return this.catsRepository.findOne({
      where: {
        id: catId,
      },
    });
  }

  async remove(id: string) {
    return await this.catsRepository.delete(id);
  }

  async update(id: string, cat: Cat): Promise<Cat> {
    this.catsRepository.update(
      {
        id: id,
      },
      {
        name: cat.name,
        age: cat.age,
      },
    );
    return this.findOne(id);
  }
}
