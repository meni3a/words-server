import { Body, Controller, Request, Get, Post, UseGuards, UnauthorizedException, HttpStatus, HttpCode } from '@nestjs/common';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,
        private readonly userService: UsersService) { }

    // @UseGuards(AuthGuard('local'))
    @Post('/login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() user: Partial<User>) {
        const result = await this.authService.validateUser(user.email, user.password);
        if (!result) {
            throw new UnauthorizedException();
        }
        return result;
    }

    @Post('/reset-password')
    @HttpCode(HttpStatus.OK)
    async resetPassword(@Body() data: { token: string, password: string }) {
        const result = await this.userService.resetPassword(data.token, data.password);
        return result;
    }

    @Post('/forgot-password')
    @HttpCode(HttpStatus.OK)
    async forgotPassword(@Body() data: { email: string }) {
        const result = await this.authService.forgotPassword(data.email);
        return result;
    }

}
