// https://school.programmers.co.kr/learn/courses/30/lessons/181946

// 2024-03-15
// 성공
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  str1 = input[0];
  str2 = input[1];
  console.log(str1 + str2);
});
