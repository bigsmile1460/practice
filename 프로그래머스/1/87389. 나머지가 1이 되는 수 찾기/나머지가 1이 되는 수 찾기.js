function solution(n) {
    var answer = 0;
    var x = 2;
    
    while(x <= n){
        if (n % x === 1){
            answer = x
            break
        }
        
        x++
    }
    return answer;
}