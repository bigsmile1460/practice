function solution(n, t) {
    var answer = n;
    
    for (time = 1; time <= t; time++){
        answer = answer * 2;
    }

    return answer;
}