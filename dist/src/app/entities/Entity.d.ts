import { Opertaion } from "./OpertaionType";
export declare abstract class Entity {
    constructor();
    validate(group?: Opertaion): Promise<void>;
    toJSON(): string;
    clone(): any;
}
