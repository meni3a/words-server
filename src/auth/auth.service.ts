
import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
        private mailService: MailService) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByEmail(email);
        if (user && user.password === pass) {
            delete (user as any)._doc.password;
            return user;
        }
        return null;
    }

    async forgotPassword(email: string) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            throw new Error("User not found");
        }
        const token = user._id;
        return await this.mailService.sendPasswordReset(user, token);
    }
}