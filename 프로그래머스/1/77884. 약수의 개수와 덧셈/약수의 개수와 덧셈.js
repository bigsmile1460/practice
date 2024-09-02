function solution(left, right) {
    let answer = 0;
    let yagsu
    let temp
    for(let num = left; num <= right; num++){
        temp = 0
        yagsu = []
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                temp++
            }
        }
        if (temp % 2 === 0){
            answer += num
        }
        else{
            answer -= num
        }
    }
    return answer;
}