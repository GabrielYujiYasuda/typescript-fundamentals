import { Shape } from "./Shape";

export class Rectangle extends Shape {
  constructor(
    x: number,
    y: number,
    private _width: number,
    private _length: number
  ) {
    super(x, y);
  }
  get width() {
    return this._width;
  }
  set width(width: number) {
    this._width = width;
  }

  get length() {
    return this._length;
  }
  set length(length: number) {
    this._length = length;
  }

  getInfo(): string {
    return `Rectangle: ${super.getInfo()} width=${this.width} length=${
      this.length
    }`;
  }
}
