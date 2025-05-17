import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol.js";
import { MealBox } from "./meal-box.js";
import { Beans, Meat } from "./meals.js";
import { Rice } from "./rice.js";

export class MainDishBuilder implements MealBuilderProtocol{
   private _meal: MealBox = new MealBox([]);
   makeMeal(): this {
        const rice = new Rice("Rice", 10);
        const beans = new Beans("Beans", 5);
        const meat = new Meat("Meat", 20);
        this._meal.add(rice);
        this._meal.add(beans);
        this._meal.add(meat);

        return this;
   }

   makeBeverage(): this {
        const beverage = new Rice("Cachaça", 5);
        this._meal.add(beverage);
        return this;
   }
   makeDessert(): this {
        const dessert = new Rice("Sua mae", 5);
        this._meal.add(dessert);
        return this;
   }
   getMeal(): MealBox {
        return this._meal;
   }
 
}