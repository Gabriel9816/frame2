import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/dogs.dto';

@Injectable()
export class DogsService {
  private dogs: CreateDogDto[] = [];

  create(dog: CreateDogDto) {
    // inserir no banco de dados usando o repository
    this.dogs.push(dog);
  }

  findAll(): CreateDogDto[] {
    // buscará todos os elementos do bd
    return this.dogs;
  }
  findOne(id: string) {
    const dog = this.dogs.filter((value) => value.id == id);
    return dog;
  }

  remove(id: string) {
    const dogs_remove = this.dogs.filter((value) => value.id != id);
    this.dogs = dogs_remove;
  }

  update(createDogDto: CreateDogDto, id: string) {
    //atualizar ele na lista remover ou usar outra função pode usar o map
    const dog_update = this.findOne(createDogDto.id);
    return dog_update;
  }
}
