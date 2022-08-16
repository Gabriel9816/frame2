import { CreateCatDto } from './dto/cats.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats: CreateCatDto[] = [];

  create(cat: CreateCatDto) {
    // inserir no banco de dados usando o repository
    this.cats.push(cat);
  }

  findAll(): CreateCatDto[] {
    // buscará todos os elementos do bd@
    return this.cats;
  }
  findOne(id: string) {
    const cat = this.cats.filter((value) => value.id == id);
    return cat;
  }

  remove(id: string) {
    const cats_remove = this.cats.filter((value) => value.id != id);
    this.cats = cats_remove;
  }

  update(createCatDto: CreateCatDto, id: string) {
    //atualizar ele na lista remover ou usar outra função pode usar o map
    this.cats.map((obj: CreateCatDto) => {
      if (obj.id === id) {
        obj.name = createCatDto.name;
        obj.age = createCatDto.age;
      }
    });
    return this.findOne(id);
  }
}
