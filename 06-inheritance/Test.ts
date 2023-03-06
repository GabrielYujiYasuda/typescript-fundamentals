import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

const shape = new Shape(10, 15);
const circle = new Circle(200, 100, 122);
const rectangle = new Rectangle(300, 302, 122, 344);

console.log(shape.getInfo());
console.log(circle.getInfo());
console.log(rectangle.getInfo());
