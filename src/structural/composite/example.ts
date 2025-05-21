import { ProductLeaf } from "./class/product-Leaf.js";

const camiseta = new ProductLeaf("Camiseta", 10);
const calca = new ProductLeaf("Calça", 20);
const sapato = new ProductLeaf("Sapato", 30);
const produtos = [camiseta, calca, sapato];
const total = produtos.reduce((total, produto) => total + produto.getPrice(), 0);
console.log(`Total: R$ ${total}`);