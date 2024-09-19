import { ConcreteComponent, ConcreteDecorator, Decorator } from "./decorator";

export function show(): void {
  var decorator1: Decorator = new ConcreteDecorator(
    1,
    new ConcreteComponent("Comp1")
  );

  decorator1.operation();
}

show();
