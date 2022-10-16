import { MailerService } from '@nestjs-modules/mailer';
import { User } from './../users/user.entity';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserConfirmation(user: User, token: string): Promise<void>;
    sendPasswordReset(user: User, token: string): Promise<void>;
}
