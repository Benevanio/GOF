import { ProductDecorator } from "./product/product-decorator";
import { TShirt } from "./product/t-shirt";

const shirt = new TShirt("Cool T-Shirt", 19.99);
const decoratedShirt = new ProductDecorator(shirt);

console.log(decoratedShirt.getName());
console.log(decoratedShirt.getPrice());