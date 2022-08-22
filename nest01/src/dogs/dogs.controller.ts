import { Dog } from './entity/dogs.entity';
import { DogsService } from './dogs.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get()
  showMessage(): string {
    return 'The Dog is on the Table';
  }

  @Get('/list')
  findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }

  @Get('/:id')
  findDog(@Param('id') id: string): Promise<Dog> {
    return this.dogsService.findOne(id);
  }

  @Post()
  createDog(@Body() dog: Dog): string {
    this.dogsService.create(dog);
    return 'A New Dog was Created';
  }

  @Put('/:id')
  updateDog(@Param('id') id: string, @Body() dog: Dog): Promise<Dog> {
    return this.dogsService.update(id, dog);
  }

  @Delete('/:id')
  deleteDog(@Param('id') id: string): string {
    this.dogsService.remove(id);
    return 'The Dog was Removed';
  }
}
