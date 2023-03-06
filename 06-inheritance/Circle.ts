import { Shape } from "./Shape";

export class Circle extends Shape {
  constructor(x: number, y: number, private _radius: number) {
    super(x, x);
  }

  get radius() {
    return this._radius;
  }
  set radius(radius: number) {
    this._radius = radius;
  }

  public getInfo(): string {
    return `Circle: ${super.getInfo()} radius=${this.radius}`;
  }
}
