import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let cri = new CricketCoach();
let gol = new GolfCoach();

let coaches: Coach[] = [];

coaches.push(cri);
coaches.push(gol);

for (let i of coaches) {
  console.log(i.getDailyWorkout());
}
