import { Body, Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { App } from './entities/app.entity';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("test")
  getHello(): string {
    const appObj = {
      id: '1',
      name: 'test',
      description: 'test',
      price: 1,
      imageUrl: 'test',
      category: 'test'
    }

    const app = plainToInstance(App, appObj);

    return app.meniTester() + JSON.stringify(instanceToPlain(app));

  }

  @Get()
  getTest(): string {
    return 'Hello World!';
  }


  @Post("test1")
  createMeni(@Body() data: App): string {

    return JSON.stringify(data);
  }
}
