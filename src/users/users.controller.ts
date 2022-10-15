import { Body, Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Opertaion } from 'src/app/entities/OpertaionType';

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UsersService) { }


    @Post("create")
    async create(@Body() data: User) {
        const user = plainToInstance(User, data);
        await user.validate(Opertaion.Create);
        return this.usersService.create(user);
    }

}
