import { IsEmail, IsOptional, IsString } from "class-validator";
import { Entity } from "./Entity";
import { Opertaion } from "./OpertaionType";


export class App extends Entity {
    constructor(fields?: Partial<App>) {
        super();
        if (fields) {
            Object.assign(this, fields);
        }
    }

    @IsString()
    id!: string;

    @IsOptional({ groups: [Opertaion.Create, Opertaion.Update] })
    @IsEmail()
    name!: string;
    @IsEmail()
    description!: string;
    price!: number;
    imageUrl!: string;
    category!: string;

    meniTester() {
        return 'meniTester';
    }

}


