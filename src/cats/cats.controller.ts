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
import { CreateCatDto } from './CreateCatDto';

@Controller('cats')
export class CatsController {
  @Get('profile')
  findAll(): string {
    return 'This action returns all cats';
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
    return 'this action adds a new cat';
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
