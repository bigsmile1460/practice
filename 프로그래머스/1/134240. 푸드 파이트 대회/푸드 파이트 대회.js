function solution(food) {
    var answer = '';
    
    for (let len = 1; len < food.length; len++){
        answer += len.toString().repeat(parseInt(food[len] / 2))
    }
    answer += '0'
    for (let len = food.length; len > 0; len--){
        answer += len.toString().repeat(parseInt(food[len] / 2))
    }
    return answer;
}