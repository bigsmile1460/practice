function solution(numbers) {
    var answer = 0;
    
    
    numbers.forEach((val)=>{
        answer+= val
    })
    
    return 45 - answer;
}