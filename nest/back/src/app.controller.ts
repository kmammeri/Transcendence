import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Render getCoucou() for route `/` and getHello() for the `/hello` route.
  @Get()
  getHello(): Array<string> {
    return this.appService.getCoucou();
  }

  @Get('hello')
  getCoucou(): Array<string> {
    return this.appService.getHello();
  }
}
