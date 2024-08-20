function solution(x, n) {
    var answer = [];
    
    for (let temp=1; temp <= n; temp++){
        answer.push(x*temp)
    }
    return answer;
}