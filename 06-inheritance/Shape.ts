export class Shape {
  constructor(private _x: number, private _y: number) {}

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(x: number) {
    this._x = x;
  }

  set y(y: number) {
    this._y = y;
  }

  public getInfo(): string {
    return `x=${this.x} y=${this.y}`;
  }
}
