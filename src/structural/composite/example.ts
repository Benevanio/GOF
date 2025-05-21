import { ProductLeaf } from "./class/product-Leaf.js";
import { ProductComposite } from "./class/ProductComposed.js";

const camiseta = new ProductLeaf("Camiseta", 10);
const calca = new ProductLeaf("Calça", 20);
const sapato = new ProductLeaf("Sapato", 30);
const productBox = new ProductComposite("Caixa de produtos");

productBox.add(camiseta);
productBox.add(calca);
productBox.add(sapato);
const totalPrice = productBox.getPrice();
console.log(`O preço total dos produtos na ${productBox.getName()} é: R$ ${totalPrice}`);