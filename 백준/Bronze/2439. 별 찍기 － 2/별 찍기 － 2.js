const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = Number(input[0])

for (let i=1; i<=n; i++) {
  let line = "";
  for (let j=0; j<n-i; j++) {
    line += " ";
  }
  line += "*".repeat(i);
  console.log(line);
}