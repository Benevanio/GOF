import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol.js";
export class MealBox implements MealCompositeProtocol{
    private  readonly _children: MealCompositeProtocol[] = [];
    
    constructor(children: MealCompositeProtocol[]) {
        this._children = children;
    }
    getPrice(): number {
        return this._children.reduce((total, child) => total + child.getPrice(), 0);
    }
    add(child: MealCompositeProtocol): void {
        this._children.push(child);
    }
    remove(child: MealCompositeProtocol): void {
        const index = this._children.indexOf(child);
        if (index !== -1) {
            this._children.splice(index, 1);
        }
    }
}