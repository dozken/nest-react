import {Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as process from "process";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() + process.env.DATABASE_URL;
  }

  @Post('conversation')
  conversation(@Body() prompt: any): string {
    return "Result from AI";
  }
}
