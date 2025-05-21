import { ProductComponent } from "./product-composite.js";

export class ProductLeaf extends ProductComponent {
    constructor(private name: string, private price: number) {
        super();
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}