import { Leaf, Composite, Component } from "./composite";

export function show() : void {
 /* const leaf1 = new Leaf("1"),
  leaf2 = new Leaf("2"),
  leaf3 = new Leaf("3"),

 composite1 = new Composite("Comp1"),
 composite2 = new Composite("Comp2");

 composite1.add(leaf1);
 composite1.add(leaf2);
 composite1.add(leaf3);

 composite1.remove(2);

 composite2.add(leaf1);
 composite2.add(leaf3);

 composite1.operation();
 composite2.operation(); */

  const leaf1 = new Leaf("H");
  const leaf2 = new Leaf("o");
  const leaf3 = new Leaf("l");
  const leaf4 = new Leaf("a");

  const composite1 = new Composite('Comp1');
  const composite2 = new Composite('Comp2');

  composite1.add(leaf1);
  composite1.add(leaf2);

  composite2.add(leaf3);
  composite2.add(leaf4);

  composite1.operation();
  composite2.operation();

  console.log();
  console.log();

  composite1.remove(0);

  composite1.operation();
  composite2.operation();

}

show();