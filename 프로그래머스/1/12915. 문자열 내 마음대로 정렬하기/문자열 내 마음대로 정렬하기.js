function solution(strings, n) {
    var answer = [];
    
    for (var index = 0; index < strings.length; index++){
        answer.push(strings[index][n] + strings[index])
    }
    answer.sort()
    
    for (var index = 0; index < strings.length; index++){
        answer[index] = answer[index].substr(1)
    }
    return answer;
}