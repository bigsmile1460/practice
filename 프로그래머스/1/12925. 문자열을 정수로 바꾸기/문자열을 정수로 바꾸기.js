function solution(s) {
    var answer = 0;
    
    if(s.slice(0) === '-'){
        answer = parseInt(s.slice(1)) * -1
    }
    else{
        answer = parseInt(s)
    }
    return answer;
}