"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var shape = new Shape_1.Shape(10, 15);
var circle = new Circle_1.Circle(200, 100, 122);
var rectangle = new Rectangle_1.Rectangle(300, 302, 122, 344);
var shapes = [];
shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);
// console.log(shapes);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var i = shapes_1[_i];
    console.log(i.getInfo());
}
