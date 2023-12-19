function solution(numbers, n) {
    var answer = 0;
    
    for (var len=0; len < numbers.length; len++){
        answer = answer + numbers[len];
        if(answer > n){
            len = numbers.length;
        }
    }
    return answer;
}