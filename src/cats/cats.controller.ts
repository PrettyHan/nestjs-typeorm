import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './CreateCatDto';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get('profile')
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Get('request')
  findRequest(@Req() request: Request): string {
    console.log(request);
    return 'This action returns request';
  }

  @Get('profile/:id')
  findOne(@Param('id') params): string {
    console.log(params);
    return `This action returns a ${params} cat`;
  }

  @Get('promise')
  async getPromise(): Promise<any[]> {
    return [];
  }

  @Post()
  create(@Body() CreateCatDto: CreateCatDto) {
    console.log(CreateCatDto);
    return this.catsService.create(CreateCatDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() CreateCatDto: CreateCatDto) {
    console.log(CreateCatDto);
    return 'This action updates a new cat';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `delete complete ${id}`;
  }
}
