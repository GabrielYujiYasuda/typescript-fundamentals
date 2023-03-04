var Customer = /** @class */ (function () {
    //Constructor
    function Customer(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Customer;
}());
var c = new Customer("Gabriel", "Yasuda");
console.log(c);
