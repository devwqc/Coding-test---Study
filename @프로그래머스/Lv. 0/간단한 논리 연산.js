// https://school.programmers.co.kr/learn/courses/30/lessons/181917

// 2024-03-22
// 성공
function solution(x1, x2, x3, x4) {
  var answer = true;

  answer = (x1 || x2) && (x3 || x4);

  return answer;
}
