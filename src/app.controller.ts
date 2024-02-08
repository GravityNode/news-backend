import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('users')
  async createUser(
    @Body() data: { name: string; email: string; image: string },
  ): Promise<User> {
    return this.userService.createUser(data);
  }

  @Get('users')
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
}
