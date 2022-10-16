import { UsersService } from './users.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: User): Promise<import("./user.entity").UserDocument>;
}
