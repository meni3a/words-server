import { User, UserDocument } from './user.entity';
import { Model } from 'mongoose';
export declare class UsersService {
    private userModel;
    resetPassword(id: string, password: string): Promise<import("mongodb").UpdateResult>;
    findOneByEmail(email: string): Promise<UserDocument>;
    constructor(userModel: Model<UserDocument>);
    create(user: User): Promise<UserDocument>;
    findOneById(id: string): Promise<UserDocument>;
}
