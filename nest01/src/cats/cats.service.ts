import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/cats.dto';

@Injectable()
export class CatsService {
  private cats: CreateCatDto[] = [];

  create(cat: CreateCatDto) {
    // inserir no banco de dados usando o repository
    this.cats.push(cat);
  }

  findAll(): CreateCatDto[] {
    // buscará todos os elementos do bd
    return this.cats;
  }
  findOne(id: number) {
    const cat = this.cats.filter((value) => value.id == id);
    return cat;
  }

  remove(id: number) {
    const cats_remove = this.cats.filter((value) => value.id != id);
    this.cats = cats_remove;
  }

  update(createCatDto: CreateCatDto) {
    //atualizar ele na lista remover ou usar outra função pode usar o map
    const cat_update = this.findOne(createCatDto.id);
    return cat_update;
  }
}
