function solution(money) {
    var answer = [];
    var coffee = 5500;
    answer.push(parseInt(money / coffee));
    answer.push(money % coffee);
    return answer;
}