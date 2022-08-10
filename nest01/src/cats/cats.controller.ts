import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): string {
    return 'olá cats está retornando com sucesso';
  }
  @Get(':id')
  getOne(@Param() params): string {
    return `meu gato chama bichano #${params.id}`;
  }

  @Get('find/:id')
  findOneMore(@Param('id') id: number): string {
    return `encontrei um outro cat com #${id}`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return `cats post #${createCatDto.age}
            anos chamado de #${createCatDto.name}`;
  }
}
