var Customer = /** @class */ (function () {
    //Constructor
    function Customer(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    return Customer;
}());
var c = new Customer("Gabriel", "Yasuda");
console.log(c);
