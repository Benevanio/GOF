import { MainDishBuilder } from "./classes/main-dish-builder.js";

const mainDisBuider = new MainDishBuilder();
mainDisBuider.makeMeal().makeDessert().makeBeverage();

console.log(mainDisBuider.getMeal());
console.log(mainDisBuider.getMeal().getPrice());