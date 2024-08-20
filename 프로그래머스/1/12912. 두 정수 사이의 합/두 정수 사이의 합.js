function solution(a, b) {
    var answer = 0;
    
    if (a <= b){
    
        for (let sumNum = a; sumNum <= b; sumNum++){
            answer += sumNum
        }
    }
    else{
        for (let sumNum = b; sumNum <= a; sumNum++){
            answer += sumNum
        }
    }
    
    return answer;
}