
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// This should be a real class/interface representing a user entity


@Injectable()
export class UsersService {
    async resetPassword(id: string, password: string) {
        return await this.userModel.updateOne({ _id: id }, { password });
    }
    async findOneByEmail(email: string): Promise<UserDocument> {
        return await this.userModel.findOne({ email });
    }

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }

    async create(user: User): Promise<UserDocument> {
        return await this.userModel.create(user);
    }

    async findOneById(id: string): Promise<UserDocument> {
        return await this.userModel.findById(id);
    }
}