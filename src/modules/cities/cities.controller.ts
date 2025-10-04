import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CityService } from './cities.service';

@Controller('cities')
export class CityController {
  constructor(private readonly service: CityService){}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.service.findOne(+id); }

  @Post()
  create(@Body() body: any) { return this.service.create(body); }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) { return this.service.update(+id, body); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.remove(+id); }
}
