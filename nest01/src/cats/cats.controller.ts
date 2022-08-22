import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entity/cats.entity';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('/:id')
  findCat(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Get('find/:id')
  findOneMore(@Param('id') id: string): string {
    return `encontrei um outro cat com id ${id}`;
  }

  @Post()
  createCat(@Body() cat: Cat): string {
    this.catsService.create(cat);
    return 'A New Cat was Created';
  }

  @Put('/:id')
  updateCat(@Param('id') id: string, @Body() cat: Cat): Promise<Cat> {
    return this.catsService.update(id, cat);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.catsService.remove(id);
  }
}
