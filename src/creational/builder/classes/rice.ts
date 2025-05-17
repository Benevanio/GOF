import { AbstractMeal } from "./abstract-meal.js";

export class Rice extends AbstractMeal{
    constructor() {
        super("Rice", 1.5);
    }
}