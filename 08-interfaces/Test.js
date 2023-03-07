"use strict";
exports.__esModule = true;
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var cri = new CricketCoach_1.CricketCoach();
var gol = new GolfCoach_1.GolfCoach();
var coaches = [];
coaches.push(cri);
coaches.push(gol);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var i = coaches_1[_i];
    console.log(i.getDailyWorkout());
}
