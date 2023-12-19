function solution(n) {
    var answer = 0;
    var pizza = 7;
    
    while(true)
    {
        if ((pizza / n) > 1 || (pizza / n) == 1){
            answer += 1;
            break;
        }
        else{
            pizza += 7;
            answer += 1;
        }    
    }
    
    
    return answer;
}