let sportsOne: string[] = ["Golf", "Crhickt", "Tennis", "Jiu-Jitsu"];

// for (let i = 0; i < sportsOne.length; i++) {
//   console.log(sportsOne[i]);
// }

for (let sport of sportsOne) {
  if (sport == "Golf") {
    console.log(`${sport} is my favorite sport!`);
  } else {
    console.log(sport);
  }
}
