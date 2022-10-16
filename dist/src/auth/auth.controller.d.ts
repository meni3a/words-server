import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
    login(user: Partial<User>): Promise<any>;
    resetPassword(data: {
        token: string;
        password: string;
    }): Promise<import("mongodb").UpdateResult>;
    forgotPassword(data: {
        email: string;
    }): Promise<void>;
}
