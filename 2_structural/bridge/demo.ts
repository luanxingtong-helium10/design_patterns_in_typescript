import {
  Abstraction,
  ConcreteImplementorA,
  ConcreteImplementorB,
  RefinedAbstractionA,
  RefinedAbstractionB,
} from "./bridge";

export function show(): void {
  var abstractionA: Abstraction = new RefinedAbstractionA(
    new ConcreteImplementorA()
  );
  var abstractionB: Abstraction = new RefinedAbstractionB(
    new ConcreteImplementorB()
  );

  abstractionA.callIt("abstractionA");
  abstractionB.callIt("abstractionB");
}

show();
