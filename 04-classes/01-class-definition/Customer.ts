class Customer {
  private firstName: string;
  private lastName: string;

  //Constructor
  public constructor(first: string, last: string) {
    this.firstName = first;
    this.lastName = last;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }
}

let c = new Customer("Gabriel", "Yasuda");

console.log(c);
