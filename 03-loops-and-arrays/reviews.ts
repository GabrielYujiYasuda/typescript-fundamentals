let reviews: number[] = [1, 2, 3, 4, 6.7, 5];
let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total += reviews[i];
}

// for (let r of reviews) {
//   console.log(r);
// }

let average: number = total / reviews.length;

console.log(`Total: ${total}`);
console.log(`Average: ${average}`);
