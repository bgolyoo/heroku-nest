import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePonyDto } from './dto/create-pony.dto';
import { UpdatePonyDto } from './dto/update-pony.dto';
import { PoniesService } from './ponies.service';

@Controller('ponies')
export class PoniesController {
  constructor(private readonly poniesService: PoniesService) {}

  @Post()
  create(@Body() createPonyDto: CreatePonyDto) {
    return this.poniesService.create(createPonyDto);
  }

  @Get()
  findAll() {
    return this.poniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.poniesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePonyDto: UpdatePonyDto) {
    return this.poniesService.update(+id, updatePonyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.poniesService.remove(+id);
  }
}
