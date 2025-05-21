import { ProductComponent } from "./product-composite.js";

export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = [];

    constructor(private name: string) {
        super();
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.children.reduce((total, product) => total + product.getPrice(), 0);
    }

    add(product: ProductComponent): void {
        this.children.push(product);
    }

    remove(product: ProductComponent): void {
        const index = this.children.indexOf(product);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }
}