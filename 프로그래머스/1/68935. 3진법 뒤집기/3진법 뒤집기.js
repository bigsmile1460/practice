function solution(n) {
    var answer = n.toString(3)
    answer = answer.split('').reverse().join('')
    answer = parseInt(answer,3)
    console.log(answer)
    return answer;
}