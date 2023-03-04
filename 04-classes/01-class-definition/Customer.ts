class Customer {
  firstName: string;
  lastName: string;

  //Constructor
  constructor(first: string, last: string) {
    this.firstName = first;
    this.lastName = last;
  }
}

let c = new Customer("Gabriel", "Yasuda");

console.log(c);
