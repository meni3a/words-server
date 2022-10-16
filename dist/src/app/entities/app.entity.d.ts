import { Entity } from "./Entity";
export declare class App extends Entity {
    constructor(fields?: Partial<App>);
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    meniTester(): string;
}
