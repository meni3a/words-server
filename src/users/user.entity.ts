import { IsDefined, IsEmail, IsMobilePhone, IsOptional, isPhoneNumber, IsString } from "class-validator";
import { Entity } from "src/app/entities/Entity";
import { Opertaion } from "src/app/entities/OpertaionType";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({ versionKey: false })
export class User extends Entity {
    constructor(fields?: Partial<User>) {
        super();
        if (fields) {
            Object.assign(this, fields);
        }

    }

    @IsString()
    @IsOptional()
    @Prop()
    @IsDefined({ groups: [Opertaion.Update, Opertaion.Delete] })
    id!: string;

    @IsString()
    @IsDefined({ groups: [Opertaion.Create] })
    @Prop()
    firstName!: string;

    @IsString()
    @IsDefined({ groups: [Opertaion.Create] })
    @Prop()
    lastName!: string;

    @IsDefined({ groups: [Opertaion.Create] })
    @IsEmail()
    @IsDefined({ groups: [Opertaion.Create] })
    @Prop()
    email!: string;

    @IsOptional()
    @IsMobilePhone()
    @Prop()
    phone!: string;

    @IsString()
    @Prop()
    password!: string;

}


export type UserDocument = User & Document;
export const userSchema = SchemaFactory.createForClass(User);