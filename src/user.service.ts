import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class UserService implements OnModuleDestroy {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(data: {
    name: string;
    email: string;
    image: string;
  }): Promise<User> {
    const newUser = await this.prisma.user.create({
      data,
    });
    return newUser;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}