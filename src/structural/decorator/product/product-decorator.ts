import { IProduct } from "./Iproductor";

export class ProductDecorator implements IProduct {

    protected product: IProduct;

    constructor(product: IProduct) {
        this.product = product;
    }

    getName(): string {
        return this.product.getName();
    }

    getPrice(): number {
        return this.product.getPrice();
    }

}
