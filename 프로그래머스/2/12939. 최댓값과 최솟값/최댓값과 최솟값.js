function solution(s) {
    let arr = s.split(' ').map(Number).sort((a, b) => a - b);
    let answer = [];
    answer.push(arr[0]);
    answer.push(arr[arr.length-1]);
    return answer.join(' ');
}