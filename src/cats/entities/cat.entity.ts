import { IsDefined, IsOptional } from "class-validator";

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Opertaion } from "../../app/entities/OpertaionType";
import { Entity } from "../../app/entities/Entity";


@Schema({ versionKey: false })
export class Cat extends Entity {

    @IsOptional()
    @Prop()
    id?: string;

    @IsDefined({ groups: [Opertaion.Create] })
    @Prop({ required: true })
    name: string;

    @IsDefined({ groups: [Opertaion.Create] })
    @Prop({ required: true })
    age: number;

    @IsDefined({ groups: [Opertaion.Create] })
    @Prop({ required: true })
    breed: string;
}

export type CatDocument = Cat & Document;
export const catSchema = SchemaFactory.createForClass(Cat);