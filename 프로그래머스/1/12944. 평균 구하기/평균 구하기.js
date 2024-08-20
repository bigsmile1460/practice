function solution(arr) {
    var answer = 0;
    
    for (let len = 0; len < arr.length; len++){
        answer+= arr[len]
    }
    answer = answer / arr.length;
    return answer;
}