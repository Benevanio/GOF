import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol.js";
import { MealBox } from "./meal-box.js";

export class MainDishBuilder implements MealBuilderProtocol{
   private _meal: MealBox = new MealBox([]);
   makeMeal(): this {
        this._meal.add(new MealBox([]));
        return this;
   }

   makeBeverage(): this {
        this._meal.add(new MealBox([]));
        return this;
   }
   makeDessert(): this {
        this._meal.add(new MealBox([]));
        return this;
   }
 
}