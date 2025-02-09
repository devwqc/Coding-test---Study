// https://school.programmers.co.kr/learn/courses/30/lessons/181949

// 2024-04-06
// 성공
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  str = [...str]
    .map((v) => (v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()))
    .join('');
  console.log(str);
});
