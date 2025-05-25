
export class BuilderFacade {
    private products: string[] = [];

    makeProduct(product: string): this {
        this.products.push(product);
        return this;
    }


}
