import { Controller, Get } from '@nestjs/common';
import { AppServiceInterface } from './app.service.interface';
import { Container } from 'typewired';
import { APP_SERVICE_TOKEN } from 'src/app.container';

@Controller()
export class AppController {
  private readonly appService =
    Container.resolveInterface<AppServiceInterface>(APP_SERVICE_TOKEN);

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
