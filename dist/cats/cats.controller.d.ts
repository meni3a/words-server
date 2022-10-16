import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createDogDto: Cat): Promise<import("./entities/cat.entity").CatDocument>;
    findAll(): Promise<import("./entities/cat.entity").CatDocument[]>;
    findOne(id: string): Promise<import("./entities/cat.entity").CatDocument[]>;
    update(id: string, updateDogDto: Partial<Cat>): Promise<import("./entities/cat.entity").CatDocument[]>;
    remove(id: string): Promise<import("./entities/cat.entity").CatDocument[]>;
}
