function solution(price, money, count) {
    var answer = 0;
    
    for (let cnt = 1; cnt <= count; cnt++){
        answer += price * cnt
    }
    if (answer > money){
        return answer - money
    }
    else{
        return 0
    }

}