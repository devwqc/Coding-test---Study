// https://school.programmers.co.kr/learn/courses/30/lessons/181904

// 2024-03-21
// 성공
function solution(my_string, m, c) {
  var answer = '';

  for (let i = c - 1; i < my_string.length; i += m) {
    answer += my_string[i];
  }

  return answer;
}
