export abstract class ProductComponent {
    abstract getPrice(): number;
    add(_product: ProductComponent): void { }
    remove(_product: ProductComponent): void { }
}

