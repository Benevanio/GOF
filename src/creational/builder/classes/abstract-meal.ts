import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol.js";

export abstract class AbstractMeal implements MealCompositeProtocol {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}