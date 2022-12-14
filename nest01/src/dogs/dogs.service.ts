import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dog } from './entity/dogs.entity';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}

  create(dog: Dog): void {
    this.dogsRepository.save(dog);
  }

  async findAll(): Promise<Dog[]> {
    return this.dogsRepository.find();
  }

  async findOne(dogId: string): Promise<Dog> {
    return this.dogsRepository.findOne({
      where: {
        id: dogId,
      },
    });
  }

  remove(dogId: string): void {
    this.dogsRepository.delete({ id: dogId });
  }

  async update(dogId: string, dog: Dog): Promise<Dog> {
    this.dogsRepository.update(
      {
        id: dogId,
      },
      {
        name: dog.name,
        age: dog.age,
      },
    );
    return this.findOne(dogId);
  }
}
