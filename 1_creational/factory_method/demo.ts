import { AbstractProduct, createProduct } from "./factoryMethod";

export function show(): void {
  var a: AbstractProduct = createProduct("A");
  var b: AbstractProduct = createProduct("B");

  console.log(a.method());
  console.log(b.method());
}

show();
