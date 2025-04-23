const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let time = input[0].split(" ").map(Number);


if (time[1] >= 45) {
  time[1] -= 45
} else {
  if (time[0] == 0) {
    time[0] = 23
    time[1] += 15
  } else {
    time[0] -= 1
    time[1] += 15
  }
}

console.log(time.join(" "))