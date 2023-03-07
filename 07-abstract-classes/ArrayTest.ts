import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

const circle = new Circle(200, 100, 122);
const rectangle = new Rectangle(300, 302, 122, 344);

let shapes: Shape[] = [];

shapes.push(circle);
shapes.push(rectangle);

// console.log(shapes);

for (let i of shapes) {
  console.log(i.getInfo());
  console.log(i.calculateArea());
  console.log();
}
