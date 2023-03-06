class Customer {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName: string) {
    this._firstName = firstName;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value: string) {
    this._lastName = value;
  }
}

console.log("test");
let c = new Customer("Gabriel", "Yasuda");
console.log(c.firstName);
console.log(c.lastName);
