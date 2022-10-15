import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Opertaion } from '../app/entities/OpertaionType';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';


@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  async create(@Body() createDogDto: Cat) {
    const cat = plainToInstance(Cat, createDogDto);
    await cat.validate(Opertaion.Create);
    return this.catsService.create(cat);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDogDto: Partial<Cat>) {
    return this.catsService.update(id, updateDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
