import { AbstractMeal } from "./abstract-meal.js";

export class Rice extends AbstractMeal {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    super(name, price);
    this.name = name;
    this.price = price;
  }
}