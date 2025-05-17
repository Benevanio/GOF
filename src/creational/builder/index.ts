import { Rice } from "./classes/rice.js";

const rice = new Rice("Arroz", 1.5);

const beans = new Rice("Feijão", 1.5);

const meat = new Rice("Carne", 5.0);
const beverage = new Rice("Refrigerante", 2.0);
const dessert = new Rice("Pudim", 3.0);
const mealBox = new Rice("Prato", 13.0);
for (const meal of [rice, beans, meat, beverage, dessert]) {
    console.log(`Meal: ${meal.getName()}, Price: $${meal.getPrice()}`);
}