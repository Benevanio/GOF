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

const table = new ProductLeaf("Table", 4500);
const kindle = new ProductLeaf("Kindle", 500);
const book = new ProductLeaf("Book", 50);
const productBox2 = new ProductComposite("Caixa de produtos 2");
productBox2.add(table);
productBox2.add(kindle);
productBox2.add(book);
productBox2.add(productBox);
console.log("Teste " + productBox2.getPrice());
const totalPrice2 = productBox2.getPrice();
console.log(`O preço total dos produtos na ${productBox2.getName()} é: R$ ${totalPrice2}`);
