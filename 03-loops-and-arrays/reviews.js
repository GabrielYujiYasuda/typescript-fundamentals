var reviews = [1, 2, 3, 4, 6.7, 5];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
// for (let r of reviews) {
//   console.log(r);
// }
var average = total / reviews.length;
console.log("Total: ".concat(total));
console.log("Average: ".concat(average));
