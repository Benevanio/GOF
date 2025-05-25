import { ProductStampDecorator } from "./product/productStampDecorator";
import { TShirt } from "./product/t-shirt";

const shirt = new TShirt("Cool T-Shirt", 19.99);
const decoratedShirt = new ProductStampDecorator(shirt);

console.log(decoratedShirt.getName());
console.log(decoratedShirt.getPrice());