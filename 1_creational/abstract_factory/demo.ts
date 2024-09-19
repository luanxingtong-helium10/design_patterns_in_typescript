/// <reference path="abstractFactory.ts" />

import {
  AbstractFactory,
  ConcreteFactory1,
  ConcreteFactory2,
  Tester,
} from "./abstractFactory";

export function show() {
  // Abstract factory1
  var factory1: AbstractFactory = new ConcreteFactory1();
  var tester1: Tester = new Tester(factory1);
  tester1.test();

  // Abstract factory2
  var factory2: AbstractFactory = new ConcreteFactory2();
  var tester2: Tester = new Tester(factory2);
  tester2.test();
}

show();
