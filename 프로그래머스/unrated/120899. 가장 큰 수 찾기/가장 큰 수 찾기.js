function solution(array) {
    var answer = [];
    var max = array[0];
    var index = 0;
    for (i = 0; i < array.length; i++){
        if (max < array[i]){
            max = array[i];
            index = i;
        }
    }
    answer.push(max);
    answer.push(index);
    
    return answer;
}