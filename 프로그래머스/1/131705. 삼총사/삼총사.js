function solution(number) {
    let answer = 0;
    let count = 0
    
    for (let a = 0; a < number.length - 2; a++){
        answer += number[a]
        for (let b = a + 1; b < number.length - 1; b++){
            answer += number[b]
            for (let c = b + 1; c < number.length; c++){
                answer += number[c]
                
                if (answer === 0){
                    count++
                }
                answer -= number[c]
            }
            answer -= number[b]    
        }
        answer -= number[a]   
    }
    
    return count;
}