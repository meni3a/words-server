import { MailService } from 'src/mail/mail.service';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private mailService;
    constructor(usersService: UsersService, mailService: MailService);
    validateUser(email: string, pass: string): Promise<any>;
    forgotPassword(email: string): Promise<void>;
}
