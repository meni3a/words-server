import { Model } from 'mongoose';
import { Cat, CatDocument } from './entities/cat.entity';
export declare class CatsService {
    private catModel;
    constructor(catModel: Model<CatDocument>);
    create(cat: Cat): Promise<CatDocument>;
    findAll(): Promise<CatDocument[]>;
    findOne(id: string): Promise<CatDocument[]>;
    update(id: string, updateCatDto: Partial<Cat>): Promise<CatDocument[]>;
    remove(id: string): Promise<CatDocument[]>;
}
